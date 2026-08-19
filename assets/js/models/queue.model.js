/**
 * ====================================================================
 * MODEL: Smart Energy-Aware Queue Model
 * Handles playlist sequencing, shuffle algorithms, and priority slots
 * ====================================================================
 */

import { PLAYLIST } from './playlist.data.js';

// Emotional / slow / romantic tracks strictly deferred to the tail end of queue
const LATE_TRACK_KEYWORDS = [
    'aadat',
    'enna sona',
    'toh phir aao',
    'toh fir aao',
    'tera mera rishta',
    'woh lamhe',
    'jugraafiya',
    'jugraaf'
];

export class QueueModel {
    constructor() {
        this.playlist = PLAYLIST;
        this.playbackQueue = [];
        this.queueIndex = 0;
        this.init();
    }

    init() {
        this.playbackQueue = this.buildSmartQueue(0);
        this.queueIndex = 0;
    }

    isSlowTrack(track) {
        if (!track) return false;
        const title = (track.title || '').toLowerCase();
        return LATE_TRACK_KEYWORDS.some(kw => title.includes(kw));
    }

    shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    /**
     * Smart Energy-Aware Queue Generator:
     * - Pos 0 (1st song): Always "Pink Lips"
     * - Pos 1 or 2 (2nd/3rd song): Guaranteed "Chittiyaan Kalaiyaan"
     * - Pos 2, 3, or 4 (3rd/4th/5th song): Guaranteed "Baby Doll"
     * - Pos 5 to ~87: Pure Fisher-Yates randomized party bangers
     * - Tail End: Slow/sad tracks strictly at the very end
     */
    buildSmartQueue(firstIndex = 0) {
        const upbeatIndices = [];
        const slowIndices = [];
        let chittiyaanIndex = -1;
        let babyDollIndex = -1;

        for (let i = 0; i < this.playlist.length; i++) {
            if (i === firstIndex) continue;
            const titleLower = this.playlist[i].title.toLowerCase();
            if (titleLower.includes('chittiyaan kalaiyaan')) {
                chittiyaanIndex = i;
                continue;
            }
            if (titleLower.includes('baby doll')) {
                babyDollIndex = i;
                continue;
            }
            if (this.isSlowTrack(this.playlist[i])) {
                slowIndices.push(i);
            } else {
                upbeatIndices.push(i);
            }
        }

        const shuffledUpbeat = this.shuffleArray(upbeatIndices);
        const shuffledSlow = this.shuffleArray(slowIndices);

        const topSlots = [null, null, null, null, null];
        topSlots[0] = firstIndex; // Pink Lips always first

        // Place Chittiyaan Kalaiyaan at position 1 (2nd song) or position 2 (3rd song)
        const chittiyaanPos = Math.random() < 0.5 ? 1 : 2;
        if (chittiyaanIndex !== -1 && chittiyaanIndex !== firstIndex) {
            topSlots[chittiyaanPos] = chittiyaanIndex;
        }

        // Place Baby Doll randomly at position 2, 3, or 4 (3rd, 4th, or 5th song)
        const candidateSlots = [2, 3, 4].filter(idx => topSlots[idx] === null);
        if (babyDollIndex !== -1 && babyDollIndex !== firstIndex && candidateSlots.length > 0) {
            const chosenSlot = candidateSlots[Math.floor(Math.random() * candidateSlots.length)];
            topSlots[chosenSlot] = babyDollIndex;
        }

        // Fill remaining top slots with shuffled upbeat picks
        const topPicks = shuffledUpbeat.slice(0, 4);
        const restUpbeat = shuffledUpbeat.slice(4);
        let pickIdx = 0;
        for (let s = 1; s < topSlots.length; s++) {
            if (topSlots[s] === null) {
                topSlots[s] = topPicks[pickIdx++];
            }
        }

        const validTop = topSlots.filter(x => x !== null && x !== undefined);
        const remainingPicks = topPicks.slice(pickIdx);

        return [...validTop, ...remainingPicks, ...restUpbeat, ...shuffledSlow];
    }

    getCurrentTrack() {
        if (this.playbackQueue.length === 0) this.init();
        const playlistIndex = this.playbackQueue[this.queueIndex] ?? 0;
        return this.playlist[playlistIndex];
    }

    getCurrentQueueIndex() {
        return this.queueIndex;
    }

    advance() {
        if (this.queueIndex + 1 >= this.playbackQueue.length) {
            // Loop with fresh smart shuffle
            const curIndex = this.playbackQueue[this.queueIndex] ?? 0;
            this.playbackQueue = this.buildSmartQueue(curIndex);
            this.queueIndex = 1;
        } else {
            this.queueIndex++;
        }
        return this.getCurrentTrack();
    }

    retreat() {
        if (this.queueIndex - 1 < 0) {
            this.queueIndex = this.playbackQueue.length - 1;
        } else {
            this.queueIndex--;
        }
        return this.getCurrentTrack();
    }

    reshuffle() {
        const curIndex = this.playbackQueue[this.queueIndex] ?? 0;
        this.playbackQueue = this.buildSmartQueue(curIndex);
        this.queueIndex = 0;
        return this.advance();
    }

    getNextUpcomingTrack() {
        const nextIdx = (this.queueIndex + 1) % this.playbackQueue.length;
        const playlistIndex = this.playbackQueue[nextIdx];
        return this.playlist[playlistIndex];
    }
}
