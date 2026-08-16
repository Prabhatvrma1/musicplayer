// ===== PLAYLIST DATA (FROM SPOTIFY PLAYLIST: Chatpate gaane 👄) =====
const PLAYLIST = [
    { title: "Pink Lips", artist: "Meet Bros Anjjan, Khushboo Grewal", uri: "spotify:track:2tyITgmOGVz6rqleDokbEN" },
    { title: "Paani Waala Dance", artist: "Ikka, Arko, Shraddha Pandit", uri: "spotify:track:0Wt2nTFdp8maSu2cNRMxDx" },
    { title: "Aaj Ki Raat (From Stree 2)", artist: "Sachin-Jigar, Madhubanti Bagchi", uri: "spotify:track:5IIoQg5A7agXCksmdRLX7i" },
    { title: "Aayi Nai (From Stree 2)", artist: "Sachin-Jigar, Pawan Singh, Simran Choudhary", uri: "spotify:track:5a8QSQYfM5CM4DtDmcuceI" },
    { title: "Garmi", artist: "Badshah, Neha Kakkar, Varun Dhawan", uri: "spotify:track:0dRRD41kOiDQQm0eivdbUr" },
    { title: "O Saki Saki", artist: "Neha Kakkar, Tulsi Kumar, B Praak", uri: "spotify:track:5fLegzfBOGFQcRGU5jgJGJ" },
    { title: "Party All Night", artist: "Yo Yo Honey Singh", uri: "spotify:track:0wEgK7RKkB1R6sR5Nrwh5g" },
    { title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan, Vishal Dadlani", uri: "spotify:track:412poAqbwD8OC0dYD1nBkV" },
    { title: "Munni Badnaam", artist: "Mamta Sharma, Aishwarya Nigam", uri: "spotify:track:3W1XPf7mvuQcWQB7U7MbTM" },
    { title: "Chikni Chameli", artist: "Shreya Ghoshal, Ajay-Atul", uri: "spotify:track:5MxiAxvsFQIr8JZi8XRntN" },
    { title: "Afghan Jalebi (Film Version)", artist: "Pritam, Asrar", uri: "spotify:track:6fORBVECjNDJ1gdq5uuoAz" },
    { title: "Baby Doll", artist: "Meet Bros Anjjan, Kanika Kapoor", uri: "spotify:track:1r4oikmMdZZiGHkPA4hSoe" }
];

// ===== DOM ELEMENTS =====
const playerPill = document.getElementById('playerPill');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const timeLabel = document.getElementById('timeLabel');
const progressFill = document.getElementById('progressFill');
const progressDot = document.getElementById('progressDot');
const progressBarWrap = document.getElementById('progressBarWrap');
const btnPlay = document.getElementById('btnPlay');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const iconPlay = document.getElementById('iconPlay');
const iconPause = document.getElementById('iconPause');

// Shortcuts & Modal Elements
const btnShortcuts = document.getElementById('btnShortcuts');
const btnCloseModal = document.getElementById('btnCloseModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const hudPill = document.getElementById('hudPill');
const hudIcon = document.getElementById('hudIcon');
const hudText = document.getElementById('hudText');

// ===== STATE =====
let currentIndex = 0;
let isPlaying = false;
let isMuted = false;
let embedController = null;
let currentDuration = 240; // duration in seconds
let currentPosition = 0;
let progressTimer = null;
let hudTimeout = null;

// ===== INITIALIZE SPOTIFY IFRAME API =====
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('spotify-embed-root');
    const options = {
        uri: 'spotify:playlist:1DatcBStkkmYNY6KKvPbv4',
        width: 300,
        height: 80
    };
    
    IFrameAPI.createController(element, options, (controller) => {
        embedController = controller;
        console.log('Spotify Embed Controller Ready');

        controller.addListener('playback_update', e => {
            const data = e.data;
            if (data) {
                isPlaying = !data.isPaused;
                updatePlayIcon();
                if (data.duration) currentDuration = data.duration / 1000;
                if (data.position !== undefined) {
                    currentPosition = data.position / 1000;
                    updateUIProgress(currentPosition, currentDuration);
                }
            }
        });
    });
};

// ===== LOAD TRACK =====
function loadTrack(index, playImmediate = true, showHud = true) {
    if (index < 0) index = PLAYLIST.length - 1;
    if (index >= PLAYLIST.length) index = 0;
    currentIndex = index;

    const track = PLAYLIST[index];
    songTitle.textContent = track.title;
    songArtist.textContent = track.artist;
    currentPosition = 0;
    updateUIProgress(0, currentDuration);

    if (showHud) {
        showHUD('🎵', track.title);
    }

    if (embedController) {
        embedController.loadUri(track.uri);
        if (playImmediate) {
            setTimeout(() => {
                embedController.play();
                isPlaying = true;
                updatePlayIcon();
            }, 300);
        }
    } else {
        if (playImmediate) {
            isPlaying = true;
            updatePlayIcon();
            startSimulatedProgress();
        }
    }
}

// ===== TOGGLE PLAY / PAUSE =====
function togglePlay() {
    triggerPillPulse();
    if (embedController) {
        embedController.togglePlay();
    } else {
        isPlaying = !isPlaying;
        updatePlayIcon();
        if (isPlaying) {
            startSimulatedProgress();
        } else {
            clearInterval(progressTimer);
        }
    }
    showHUD(isPlaying ? '▶' : '⏸', isPlaying ? 'Play' : 'Pause');
}

// ===== SEEK FORWARD / BACKWARD =====
function seekRelative(deltaSeconds) {
    const newPos = Math.max(0, Math.min(currentPosition + deltaSeconds, currentDuration));
    currentPosition = newPos;
    updateUIProgress(currentPosition, currentDuration);
    
    if (embedController) {
        embedController.seek(Math.floor(newPos));
    }
    
    const icon = deltaSeconds > 0 ? '⏩' : '⏪';
    const text = deltaSeconds > 0 ? `+${deltaSeconds}s` : `${deltaSeconds}s`;
    showHUD(icon, text);
    triggerPillPulse();
}

// ===== RANDOM / SHUFFLE =====
function playRandom() {
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * PLAYLIST.length);
    } while (nextIndex === currentIndex && PLAYLIST.length > 1);
    
    showHUD('🔀', 'Shuffle');
    loadTrack(nextIndex, true, false);
}

// ===== TOGGLE MUTE =====
function toggleMute() {
    isMuted = !isMuted;
    showHUD(isMuted ? '🔇' : '🔊', isMuted ? 'Muted' : 'Unmuted');
}

// ===== HUD TOAST NOTIFICATION =====
function showHUD(icon, text) {
    if (!hudPill) return;
    hudIcon.textContent = icon;
    hudText.textContent = text;
    hudPill.classList.add('show');

    clearTimeout(hudTimeout);
    hudTimeout = setTimeout(() => {
        hudPill.classList.remove('show');
    }, 1200);
}

function triggerPillPulse() {
    if (!playerPill) return;
    playerPill.classList.add('key-active');
    setTimeout(() => playerPill.classList.remove('key-active'), 180);
}

// ===== MODAL TOGGLE =====
function toggleShortcutsModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.toggle('open');
}

// ===== SIMULATED PROGRESS FOR LOCAL PREVIEW =====
function startSimulatedProgress() {
    clearInterval(progressTimer);
    progressTimer = setInterval(() => {
        if (!isPlaying) return;
        currentPosition += 1;
        if (currentPosition >= currentDuration) {
            loadTrack(currentIndex + 1, true, false);
        } else {
            updateUIProgress(currentPosition, currentDuration);
        }
    }, 1000);
}

// ===== UI HELPERS =====
function updatePlayIcon() {
    if (isPlaying) {
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
    } else {
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
    }
}

function formatTime(sec) {
    if (isNaN(sec) || !isFinite(sec) || sec < 0) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function updateUIProgress(pos, dur) {
    const pct = dur > 0 ? (pos / dur) * 100 : 0;
    progressFill.style.width = `${pct}%`;
    progressDot.style.left = `${pct}%`;
    timeLabel.textContent = `${formatTime(pos)} / ${formatTime(dur)}`;
}

// ===== SEEK CLICK =====
function seek(e) {
    const rect = progressBarWrap.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = offsetX / rect.width;
    const targetSeconds = pct * currentDuration;

    currentPosition = targetSeconds;
    updateUIProgress(currentPosition, currentDuration);

    if (embedController) {
        embedController.seek(Math.floor(targetSeconds));
    }
}

// ===== EVENT LISTENERS =====
function init() {
    loadTrack(0, false, false);

    btnPlay.addEventListener('click', togglePlay);
    btnPrev.addEventListener('click', () => loadTrack(currentIndex - 1, true));
    btnNext.addEventListener('click', () => loadTrack(currentIndex + 1, true));

    // Modal Events
    if (btnShortcuts) btnShortcuts.addEventListener('click', toggleShortcutsModal);
    if (btnCloseModal) btnCloseModal.addEventListener('click', () => modalBackdrop.classList.remove('open'));
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) modalBackdrop.classList.remove('open');
        });
    }

    // Seek Click
    progressBarWrap.addEventListener('click', seek);

    // ===== KEYBOARD SHORTCUTS =====
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.code) {
            // Space: Play / Pause
            case 'Space':
                e.preventDefault();
                togglePlay();
                break;

            // Arrow Right / L: Seek Forward (+5s)
            case 'ArrowRight':
            case 'KeyL':
                e.preventDefault();
                seekRelative(e.shiftKey ? 10 : 5);
                break;

            // Arrow Left / J: Seek Backward (-5s)
            case 'ArrowLeft':
            case 'KeyJ':
                e.preventDefault();
                seekRelative(e.shiftKey ? -10 : -5);
                break;

            // N or >: Next Song
            case 'KeyN':
            case 'Period':
                e.preventDefault();
                loadTrack(currentIndex + 1, true);
                break;

            // P or <: Previous Song
            case 'KeyP':
            case 'Comma':
                e.preventDefault();
                loadTrack(currentIndex - 1, true);
                break;

            // R: Shuffle / Random
            case 'KeyR':
                e.preventDefault();
                playRandom();
                break;

            // M: Mute
            case 'KeyM':
                e.preventDefault();
                toggleMute();
                break;

            // ? or Slash or H: Toggle Shortcuts Modal
            case 'Slash':
            case 'KeyH':
                if (e.shiftKey || e.code === 'KeyH') {
                    e.preventDefault();
                    toggleShortcutsModal();
                }
                break;

            // Escape: Close Modal
            case 'Escape':
                if (modalBackdrop && modalBackdrop.classList.contains('open')) {
                    modalBackdrop.classList.remove('open');
                }
                break;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
