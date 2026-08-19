/**
 * ====================================================================
 * SERVICE: Stream Service
 * Handles on-demand 320kbps CDN stream resolution and edge caching
 * ====================================================================
 */

export class StreamService {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Resolves high-fidelity 320kbps audio URL and album art for a track
     * @param {Object} track - Track object { title, artist, cover }
     * @returns {Promise<string>} - Resolves to direct audio stream URL
     */
    async resolveAudio(track) {
        if (!track) return '';
        if (track.streamUrl) return track.streamUrl;

        const cacheKey = `${track.title} ${track.artist}`.trim();
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            const resp = await fetch(`/api/stream?query=${encodeURIComponent(cacheKey)}&_t=${Date.now()}`);
            if (resp.ok) {
                const data = await resp.json();
                if (data.streamUrl) {
                    this.cache.set(cacheKey, data.streamUrl);
                    if (data.cover) {
                        track.cover = data.cover;
                    }
                    return data.streamUrl;
                }
            }
        } catch (err) {
            console.warn(`[StreamService] Stream resolution fallback for "${track.title}":`, err);
        }

        return '';
    }

    /**
     * Predictive background prefetch for upcoming tracks in queue
     * @param {Object} track
     */
    prefetch(track) {
        if (!track) return;
        const cacheKey = `${track.title} ${track.artist}`.trim();
        if (!this.cache.has(cacheKey)) {
            this.resolveAudio(track).catch(() => {});
        }
    }
}
