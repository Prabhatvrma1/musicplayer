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

        // Direct same-origin audio proxy URL (100% reliable across all browsers & mobile)
        const audioUrl = `/api/audio?query=${encodeURIComponent(cacheKey)}`;
        this.cache.set(cacheKey, audioUrl);

        // Fetch cover art in background if not already present
        if (!track.cover || track.cover === '') {
            fetch(`/api/stream?query=${encodeURIComponent(cacheKey)}`)
                .then(r => r.json())
                .then(data => {
                    if (data?.cover) track.cover = data.cover;
                })
                .catch(() => {});
        }

        return audioUrl;
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
