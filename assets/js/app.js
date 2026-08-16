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

// ===== STATE =====
let currentIndex = 0;
let isPlaying = false;
let embedController = null;
let currentDuration = 240; // fallback in seconds
let currentPosition = 0;
let progressTimer = null;

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
function loadTrack(index, playImmediate = true) {
    if (index < 0) index = PLAYLIST.length - 1;
    if (index >= PLAYLIST.length) index = 0;
    currentIndex = index;

    const track = PLAYLIST[index];
    songTitle.textContent = track.title;
    songArtist.textContent = track.artist;
    currentPosition = 0;
    updateUIProgress(0, currentDuration);

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

// ===== TOGGLE PLAY =====
function togglePlay() {
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
}

// ===== SIMULATED PROGRESS FOR LOCAL PREVIEW =====
function startSimulatedProgress() {
    clearInterval(progressTimer);
    progressTimer = setInterval(() => {
        if (!isPlaying) return;
        currentPosition += 1;
        if (currentPosition >= currentDuration) {
            loadTrack(currentIndex + 1, true);
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

// ===== SEEK =====
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
    loadTrack(0, false);

    btnPlay.addEventListener('click', togglePlay);
    btnPrev.addEventListener('click', () => loadTrack(currentIndex - 1, true));
    btnNext.addEventListener('click', () => loadTrack(currentIndex + 1, true));

    // Seek Click
    progressBarWrap.addEventListener('click', seek);

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (embedController) embedController.seek(Math.floor(currentPosition + 5));
                break;
            case 'ArrowLeft':
                e.preventDefault();
                if (embedController) embedController.seek(Math.max(0, Math.floor(currentPosition - 5)));
                break;
            case 'KeyN':
                loadTrack(currentIndex + 1, true);
                break;
            case 'KeyP':
                loadTrack(currentIndex - 1, true);
                break;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
