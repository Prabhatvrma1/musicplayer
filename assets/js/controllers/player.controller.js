/**
 * ====================================================================
 * CONTROLLER: Player Controller
 * Orchestrates models, services, views, audio events & keyboard controls
 * ====================================================================
 */

export class PlayerController {
    constructor(queueModel, streamService, playerView) {
        this.queue = queueModel;
        this.stream = streamService;
        this.view = playerView;

        this.audio = document.getElementById('audioPlayer') || new Audio();
        this.isPlaying = false;
        this.isSeeking = false;
    }

    /**
     * Bootstrap the playback controller
     */
    async init() {
        this.audio.volume = 0.9;
        this.bindEvents();
        this.view.startClock();
        this.view.startOnlineCounter();

        // Load starting kickoff track (Pink Lips)
        const initialTrack = this.queue.getCurrentTrack();
        await this.loadTrack(initialTrack, false, false);
    }

    /**
     * Load, resolve stream URL, and play track
     * @param {Object} track
     * @param {boolean} autoPlay
     * @param {boolean} showHud
     */
    async loadTrack(track, autoPlay = true, showHud = true) {
        if (!track) return;

        this.view.renderTrack(track);

        if (showHud) {
            this.view.showHUD('🎵', track.title);
        }

        const streamUrl = await this.stream.resolveAudio(track);
        if (track.cover) {
            this.view.renderTrack(track);
        }

        if (streamUrl) {
            this.audio.src = streamUrl;
        }

        if (autoPlay && this.audio.src) {
            this.audio.play().then(() => {
                this.isPlaying = true;
                this.view.renderPlayState(true);
                // Background prefetch next track in queue
                const nextTrack = this.queue.getNextUpcomingTrack();
                this.stream.prefetch(nextTrack);
            }).catch(err => {
                console.warn('[PlayerController] Playback error:', err);
                this.isPlaying = false;
                this.view.renderPlayState(false);
            });
        }
    }

    /**
     * Toggle Play / Pause state
     */
    togglePlay() {
        this.view.pulsePlayer();

        if (!this.audio.src || this.audio.src === '' || this.audio.src.endsWith('/')) {
            const currentTrack = this.queue.getCurrentTrack();
            this.loadTrack(currentTrack, true, true);
            return;
        }

        if (this.audio.paused) {
            const playPromise = this.audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    this.isPlaying = true;
                    this.view.renderPlayState(true);
                    this.view.showHUD('▶', 'Play');
                    const nextTrack = this.queue.getNextUpcomingTrack();
                    this.stream.prefetch(nextTrack);
                }).catch(() => {
                    const currentTrack = this.queue.getCurrentTrack();
                    this.loadTrack(currentTrack, true, true);
                });
            }
        } else {
            this.audio.pause();
            this.isPlaying = false;
            this.view.renderPlayState(false);
            this.view.showHUD('⏸', 'Pause');
        }
    }

    /**
     * Advance to next track in queue
     */
    playNext() {
        this.view.pulsePlayer();
        const nextTrack = this.queue.advance();
        this.loadTrack(nextTrack, true, true);
    }

    /**
     * Retreat to previous track in queue
     */
    playPrev() {
        this.view.pulsePlayer();
        const prevTrack = this.queue.retreat();
        this.loadTrack(prevTrack, true, true);
    }

    /**
     * Re-randomize queue on demand
     */
    reshuffle() {
        this.view.pulsePlayer();
        const shuffledTrack = this.queue.reshuffle();
        this.view.showHUD('🔀', 'Shuffled');
        this.loadTrack(shuffledTrack, true, true);
    }

    /**
     * Seek audio relative to current position (+5s / -5s)
     * @param {number} deltaSeconds
     */
    seekRelative(deltaSeconds) {
        if (!this.audio.duration) return;
        const newTime = Math.max(0, Math.min(this.audio.currentTime + deltaSeconds, this.audio.duration));
        this.audio.currentTime = newTime;
        this.view.renderProgress(this.audio.currentTime, this.audio.duration);

        const icon = deltaSeconds > 0 ? '⏩' : '⏪';
        const text = deltaSeconds > 0 ? `+${deltaSeconds}s` : `${deltaSeconds}s`;
        this.view.showHUD(icon, text);
        this.view.pulsePlayer();
    }

    /**
     * Scrub timeline by click / touch offset
     * @param {MouseEvent|TouchEvent} e
     */
    seek(e) {
        const wrap = this.view.dom.progressBarWrap;
        if (!wrap) return;
        const rect = wrap.getBoundingClientRect();
        const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const pct = offsetX / rect.width;

        if (this.audio.duration) {
            this.audio.currentTime = pct * this.audio.duration;
            this.view.renderProgress(this.audio.currentTime, this.audio.duration);
        }
    }

    /**
     * Toggle volume mute
     */
    toggleMute() {
        this.audio.muted = !this.audio.muted;
        this.view.showHUD(this.audio.muted ? '🔇' : '🔊', this.audio.muted ? 'Muted' : 'Unmuted');
    }

    /**
     * Bind DOM, touch, mouse, and audio events
     */
    bindEvents() {
        const { btnPlay, cdDisc, btnPrev, btnNext, progressBarWrap, btnShortcuts, btnCloseModal, modalBackdrop } = this.view.dom;

        if (btnPlay) btnPlay.addEventListener('click', () => this.togglePlay());
        if (cdDisc) cdDisc.addEventListener('click', () => this.togglePlay());
        if (btnPrev) btnPrev.addEventListener('click', () => this.playPrev());
        if (btnNext) btnNext.addEventListener('click', () => this.playNext());

        // Audio state listeners
        this.audio.addEventListener('play', () => {
            this.isPlaying = true;
            this.view.renderPlayState(true);
        });

        this.audio.addEventListener('pause', () => {
            this.isPlaying = false;
            this.view.renderPlayState(false);
        });

        this.audio.addEventListener('timeupdate', () => {
            if (!this.isSeeking) {
                this.view.renderProgress(this.audio.currentTime, this.audio.duration);
            }
        });

        this.audio.addEventListener('loadedmetadata', () => {
            this.view.renderProgress(0, this.audio.duration);
        });

        this.audio.addEventListener('ended', () => {
            this.playNext();
        });

        // Mouse & Touch scrub events
        if (progressBarWrap) {
            progressBarWrap.addEventListener('mousedown', (e) => {
                this.isSeeking = true;
                this.seek(e);
            });

            progressBarWrap.addEventListener('touchstart', (e) => {
                this.isSeeking = true;
                this.seek(e);
            }, { passive: true });

            progressBarWrap.addEventListener('touchmove', (e) => {
                if (this.isSeeking) this.seek(e);
            }, { passive: true });

            progressBarWrap.addEventListener('touchend', () => {
                this.isSeeking = false;
            });
        }

        document.addEventListener('mousemove', (e) => {
            if (this.isSeeking) this.seek(e);
        });

        document.addEventListener('mouseup', () => {
            this.isSeeking = false;
        });

        // Shortcuts Dialog listeners
        if (btnShortcuts) btnShortcuts.addEventListener('click', () => this.view.toggleModal());
        if (btnCloseModal) btnCloseModal.addEventListener('click', () => this.view.toggleModal(false));
        if (modalBackdrop) {
            modalBackdrop.addEventListener('click', (e) => {
                if (e.target === modalBackdrop) this.view.toggleModal(false);
            });
        }

        // Bind keyboard shortcuts
        this.bindKeyboardShortcuts();
    }

    /**
     * Keyboard Shortcut Event Suite
     */
    bindKeyboardShortcuts() {
        window.addEventListener('keydown', (e) => {
            if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

            const key = e.key || '';
            const code = e.code || '';
            const keyCode = e.keyCode || 0;

            // Space / 'K' -> Play/Pause
            if (code === 'Space' || key === ' ' || key === 'Spacebar' || keyCode === 32 || code === 'KeyK' || key === 'k' || key === 'K') {
                e.preventDefault();
                e.stopPropagation();
                this.togglePlay();
                return;
            }

            // Seek Forward (Right Arrow or L)
            if (code === 'ArrowRight' || key === 'ArrowRight' || code === 'KeyL' || key === 'l' || key === 'L') {
                e.preventDefault();
                this.seekRelative(e.shiftKey ? 10 : 5);
                return;
            }

            // Seek Backward (Left Arrow or J)
            if (code === 'ArrowLeft' || key === 'ArrowLeft' || code === 'KeyJ' || key === 'j' || key === 'J') {
                e.preventDefault();
                this.seekRelative(e.shiftKey ? -10 : -5);
                return;
            }

            // Next Track (N or >)
            if (code === 'KeyN' || key === 'n' || key === 'N' || key === '>' || code === 'Period') {
                e.preventDefault();
                this.playNext();
                return;
            }

            // Previous Track (P or <)
            if (code === 'KeyP' || key === 'p' || key === 'P' || key === '<' || code === 'Comma') {
                e.preventDefault();
                this.playPrev();
                return;
            }

            // Reshuffle (R)
            if (code === 'KeyR' || key === 'r' || key === 'R') {
                e.preventDefault();
                this.reshuffle();
                return;
            }

            // Mute / Unmute (M)
            if (code === 'KeyM' || key === 'm' || key === 'M') {
                e.preventDefault();
                this.toggleMute();
                return;
            }

            // Help Modal (? or H)
            if (key === '?' || (code === 'Slash' && e.shiftKey) || code === 'KeyH' || key === 'h' || key === 'H') {
                e.preventDefault();
                this.view.toggleModal();
                return;
            }

            // Close Modal on Escape
            if (code === 'Escape' || key === 'Escape' || keyCode === 27) {
                this.view.toggleModal(false);
            }
        }, { capture: true });
    }
}
