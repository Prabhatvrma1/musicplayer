module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const query = req.query?.query || req.query?.q || (req.url && new URL(req.url, 'http://localhost').searchParams.get('query'));
  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter' });
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
      return res.status(404).json({ error: 'Song not found' });
    }

    const song = songs[0];
    const songId = song.id;

    // Step 2: Fetch song details for encrypted_media_url
    const detUrl = `https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0&_format=json&pids=${songId}`;
    const detResp = await fetch(detUrl, { headers });
    const detData = await detResp.json();
    const songObj = detData[songId];
    if (!songObj || !songObj.encrypted_media_url) {
      return res.status(404).json({ error: 'Media details not available' });
    }

    const encUrl = songObj.encrypted_media_url;
    const cover = (songObj.image || song.image || '').replace('150x150', '500x500').replace('50x50', '500x500');

    // Step 3: Generate 320kbps Auth URL
    const authUrl = `https://www.jiosaavn.com/api.php?__call=song.generateAuthToken&_format=json&_marker=0&cc=in&url=${encodeURIComponent(encUrl)}&bitrate=320`;
    const authResp = await fetch(authUrl, { headers });
    const authData = await authResp.json();

    if (!authData?.auth_url) {
      return res.status(500).json({ error: 'Failed to generate stream token' });
    }

    // Cache on Vercel Edge for 12 hours
    res.setHeader('Cache-Control', 'public, s-maxage=43200, max-age=43200');
    return res.status(200).json({
      success: true,
      title: song.title || songObj.song,
      artist: songObj.primary_artists || song.description || '',
      cover: cover,
      streamUrl: authData.auth_url
    });
  } catch (err) {
    console.error('Stream resolver error:', err);
    return res.status(500).json({ error: err.message });
  }
};
