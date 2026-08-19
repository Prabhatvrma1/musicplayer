/**
 * ====================================================================
 * VIEW: Player View
 * Manages DOM manipulation, animations, live navbar clock & HUD alerts
 * ====================================================================
 */

export class PlayerView {
    constructor() {
        this.dom = {
            songTitle: document.getElementById('songTitle'),
            songArtist: document.getElementById('songArtist'),
            playerArtImg: document.getElementById('playerArtImg'),
            cdDisc: document.getElementById('cdDisc'),
            timeLabel: document.getElementById('timeLabel'),
            progressFill: document.getElementById('progressFill'),
            progressDot: document.getElementById('progressDot'),
            progressBarWrap: document.getElementById('progressBarWrap'),
            btnPlay: document.getElementById('btnPlay'),
            btnPrev: document.getElementById('btnPrev'),
            btnNext: document.getElementById('btnNext'),
            iconPlay: document.getElementById('iconPlay'),
            iconPause: document.getElementById('iconPause'),
            playerPill: document.getElementById('playerPill'),
            hudPill: document.getElementById('hudPill'),
            hudIcon: document.getElementById('hudIcon'),
            hudText: document.getElementById('hudText'),
            topClock: document.getElementById('topClock'),
            onlineCount: document.getElementById('onlineCount'),
            btnShortcuts: document.getElementById('btnShortcuts'),
            btnCloseModal: document.getElementById('btnCloseModal'),
            modalBackdrop: document.getElementById('modalBackdrop')
        };

        this.hudTimeout = null;
    }

    /**
     * Update active song title, artist, and spinning vinyl album art
     * @param {Object} track
     */
    renderTrack(track) {
        if (!track) return;
        if (this.dom.songTitle) this.dom.songTitle.textContent = track.title;
        if (this.dom.songArtist) this.dom.songArtist.textContent = track.artist;
        if (this.dom.playerArtImg && track.cover) this.dom.playerArtImg.src = track.cover;
        this.resetProgress();
    }

    /**
     * Toggle play/pause buttons and disc spinning animation
     * @param {boolean} isPlaying
     */
    renderPlayState(isPlaying) {
        if (isPlaying) {
            if (this.dom.iconPlay) this.dom.iconPlay.style.display = 'none';
            if (this.dom.iconPause) this.dom.iconPause.style.display = 'block';
            if (this.dom.cdDisc) this.dom.cdDisc.classList.add('is-spinning');
        } else {
            if (this.dom.iconPlay) this.dom.iconPlay.style.display = 'block';
            if (this.dom.iconPause) this.dom.iconPause.style.display = 'none';
            if (this.dom.cdDisc) this.dom.cdDisc.classList.remove('is-spinning');
        }
    }

    /**
     * Render track scrubbing timeline progress
     * @param {number} cur
     * @param {number} dur
     */
    renderProgress(cur = 0, dur = 0) {
        if (!dur || dur <= 0) {
            this.resetProgress();
            return;
        }
        const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
        if (this.dom.progressFill) this.dom.progressFill.style.width = `${pct}%`;
        if (this.dom.progressDot) this.dom.progressDot.style.left = `${pct}%`;
        if (this.dom.timeLabel) this.dom.timeLabel.textContent = `${this.formatTime(cur)} / ${this.formatTime(dur)}`;
    }

    resetProgress() {
        if (this.dom.progressFill) this.dom.progressFill.style.width = '0%';
        if (this.dom.progressDot) this.dom.progressDot.style.left = '0%';
        if (this.dom.timeLabel) this.dom.timeLabel.textContent = '0:00 / 0:00';
    }

    formatTime(sec) {
        if (isNaN(sec) || !isFinite(sec) || sec < 0) return '0:00';
        const m = Math.floor(sec / 60);
        const s = Math.floor(sec % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    /**
     * On-screen HUD Toast notifications
     * @param {string} icon
     * @param {string} text
     */
    showHUD(icon, text) {
        if (!this.dom.hudPill || !this.dom.hudIcon || !this.dom.hudText) return;
        this.dom.hudIcon.textContent = icon;
        this.dom.hudText.textContent = text;
        this.dom.hudPill.classList.add('visible');

        if (this.hudTimeout) clearTimeout(this.hudTimeout);
        this.hudTimeout = setTimeout(() => {
            this.dom.hudPill.classList.remove('visible');
        }, 1400);
    }

    pulsePlayer() {
        if (!this.dom.playerPill) return;
        this.dom.playerPill.classList.remove('pulse');
        void this.dom.playerPill.offsetWidth; // Force reflow
        this.dom.playerPill.classList.add('pulse');
    }

    toggleModal(forceState) {
        if (!this.dom.modalBackdrop) return;
        if (forceState !== undefined) {
            this.dom.modalBackdrop.classList.toggle('open', forceState);
        } else {
            this.dom.modalBackdrop.classList.toggle('open');
        }
    }

    /**
     * Live 12-Hour formatted digital clock ("1:45 pm")
     */
    startClock() {
        const update = () => {
            if (!this.dom.topClock) return;
            const now = new Date();
            let hours = now.getHours();
            const ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12;
            const minutes = now.getMinutes().toString().padStart(2, '0');
            this.dom.topClock.textContent = `${hours}:${minutes} ${ampm}`;
        };
        update();
        setInterval(update, 1000);
    }

    /**
     * Simulated organic listener counter in top navigation
     */
    startOnlineCounter() {
        if (!this.dom.onlineCount) return;
        let count = 33;
        setInterval(() => {
            const change = Math.floor(Math.random() * 3) - 1; // -1, 0, +1
            count = Math.max(26, Math.min(39, count + change));
            this.dom.onlineCount.textContent = count;
        }, 12000);
    }
}
