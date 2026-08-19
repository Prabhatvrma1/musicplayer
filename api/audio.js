const https = require('https');
const http = require('http');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Range, Accept, Origin');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const query = req.query?.query || req.query?.q || (req.url && new URL(req.url, 'http://localhost').searchParams.get('query'));
  if (!query) {
    return res.status(400).send('Missing query parameter');
  }

  try {
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    };

    // Step 1: Search track on JioSaavn
    const searchUrl = `https://www.jiosaavn.com/api.php?__call=autocomplete.get&_format=json&_marker=0&cc=in&query=${encodeURIComponent(query)}`;
    const searchResp = await fetch(searchUrl, { headers });
    const searchData = await searchResp.json();
    const songs = searchData?.songs?.data || [];
    if (!songs.length) {
      return res.status(404).send('Song not found');
    }

    const songId = songs[0].id;

    // Step 2: Fetch song details for encrypted_media_url
    const detUrl = `https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0&_format=json&pids=${songId}`;
    const detResp = await fetch(detUrl, { headers });
    const detData = await detResp.json();
    const songObj = detData[songId];
    if (!songObj?.encrypted_media_url) {
      return res.status(404).send('Media details not available');
    }

    // Step 3: Generate 320kbps Auth URL
    const authUrl = `https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&_format=json&_marker=0&cc=in&url=${encodeURIComponent(songObj.encrypted_media_url)}&bitrate=320`;
    const authResp = await fetch(authUrl, { headers });
    const authData = await authResp.json();

    if (!authData?.auth_url) {
      return res.status(500).send('Stream token failed');
    }

    const targetUrl = authData.auth_url;

    // Stream proxy with Range support
    const streamHeaders = {};
    if (req.headers.range) {
      streamHeaders['Range'] = req.headers.range;
    }

    const client = targetUrl.startsWith('https') ? https : http;
    const proxyReq = client.get(targetUrl, { headers: streamHeaders }, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, {
        ...proxyRes.headers,
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400'
      });
      proxyRes.pipe(res);
    });

    proxyReq.on('error', (err) => {
      console.error('Audio proxy error:', err);
      if (!res.headersSent) res.status(500).send('Proxy error');
    });

    req.on('close', () => {
      proxyReq.destroy();
    });

  } catch (err) {
    console.error('Audio stream handler error:', err);
    if (!res.headersSent) res.status(500).send(err.message);
  }
};
