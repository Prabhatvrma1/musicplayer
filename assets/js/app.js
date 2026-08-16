// ===== COMPLETE PLAYLIST DATA (FULL LENGTH TRACKS FROM SPOTIFY PLAYLIST) =====
const PLAYLIST = [
    { title: "Pink Lips", artist: "Meet Bros Anjjan, Khushboo Grewal", file: "Pink Lips_spotdown.org.mp3" },
    { title: "Paani Waala Dance", artist: "Ikka, Arko, Shraddha Pandit", file: "Paani Waala Dance_spotdown.org.mp3" },
    { title: "Aaj Ki Raat (From Stree 2)", artist: "Sachin-Jigar, Madhubanti Bagchi", file: "Aaj Ki Raat (From _Stree 2_)_spotdown.org.mp3" },
    { title: "Aayi Nai (From Stree 2)", artist: "Sachin-Jigar, Pawan Singh, Simran Choudhary", file: "Aayi Nai (From _Stree 2_)_spotdown.org.mp3" },
    { title: "Garmi", artist: "Badshah, Neha Kakkar, Varun Dhawan", file: "Garmi (From _Street Dancer 3D_) (feat. Varun Dhawan)_spotdown.org.mp3" },
    { title: "O Saki Saki", artist: "Neha Kakkar, Tulsi Kumar, B Praak", file: "O Saki Saki (From _Batla House_)_spotdown.org.mp3" },
    { title: "Party All Night", artist: "Yo Yo Honey Singh", file: "Party All Night (From _Boss_)_spotdown.org.mp3" },
    { title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan, Vishal Dadlani", file: "Sheila Ki Jawani_spotdown.org.mp3" },
    { title: "Munni Badnaam", artist: "Mamta Sharma, Aishwarya Nigam", file: "Munni Badnaam_spotdown.org.mp3" },
    { title: "Chikni Chameli", artist: "Shreya Ghoshal, Ajay-Atul", file: "Chikni Chameli_spotdown.org.mp3" },
    { title: "Afghan Jalebi (Film Version)", artist: "Pritam, Asrar", file: "Afghan Jalebi (Film Version)_spotdown.org.mp3" },
    { title: "Baby Doll", artist: "Meet Bros Anjjan, Kanika Kapoor", file: "Baby Doll_spotdown.org.mp3" },
    { title: "Aa Re Pritam Pyaare", artist: "Sajid-Wajid, Mamta Sharma", file: "Aa Re Pritam Pyaare_spotdown.org.mp3" },
    { title: "Aa Toh Sahi", artist: "Meet Bros, Neha Kakkar", file: "Aa Toh Sahi_spotdown.org.mp3" },
    { title: "Aadat", artist: "Atif Aslam, Jal", file: "Aadat_spotdown.org.mp3" },
    { title: "Aao Kabhi Haveli Pe", artist: "Badshah, Nikhita Gandhi", file: "Aao Kabhi Haveli Pe_spotdown.org.mp3" },
    { title: "Aao Raja", artist: "Yo Yo Honey Singh, Neha Kakkar", file: "Aao Raja_spotdown.org.mp3" },
    { title: "Aga Bai", artist: "Shalmali Kholgade, Monali Thakur", file: "Aga Bai_spotdown.org.mp3" },
    { title: "Allah Maaf Kare", artist: "Sonu Nigam, Shilpa Rao", file: "Allah Maaf Kare_spotdown.org.mp3" },
    { title: "Anarkali Disco Chali", artist: "Mamta Sharma, Sukhwinder Singh", file: "Anarkali Disco Chali_spotdown.org.mp3" },
    { title: "Ang Laga De", artist: "Shreya Ghoshal, Osman Mir", file: "Ang Laga De_spotdown.org.mp3" },
    { title: "Angreji Beat", artist: "Yo Yo Honey Singh, Gippy Grewal", file: "Angreji Beat_spotdown.org.mp3" },
    { title: "Babli Badmaash", artist: "Sunidhi Chauhan", file: "Babli Badmaash_spotdown.org.mp3" },
    { title: "Bairan", artist: "Diler Kharkiya", file: "Bairan_spotdown.org.mp3" },
    { title: "Balma", artist: "Sreerama Chandra, Shreya Ghoshal", file: "Balma_spotdown.org.mp3" },
    { title: "Beedi", artist: "Sunidhi Chauhan, Sukhwinder Singh", file: "Beedi_spotdown.org.mp3" },
    { title: "Billo Rani", artist: "Anand Raj Anand, Richa Sharma", file: "Billo Rani_spotdown.org.mp3" },
    { title: "Blue Eyes", artist: "Yo Yo Honey Singh", file: "Blue Eyes_spotdown.org.mp3" },
    { title: "Chaar Botal Vodka", artist: "Yo Yo Honey Singh", file: "Chaar Botal Vodka (From _Ragini Mms 2_)_spotdown.org.mp3" },
    { title: "Character Dheela", artist: "Neeraj Shridhar, Amrita Kak", file: "Character Dheela_spotdown.org.mp3" },
    { title: "Chhaliya", artist: "Sunidhi Chauhan, Sukhwinder Singh", file: "Chhaliya_spotdown.org.mp3" },
    { title: "Chokra Jawaan", artist: "Vishal Dadlani, Sunidhi Chauhan", file: "Chokra Jawaan_spotdown.org.mp3" },
    { title: "Dilbara", artist: "Parampara Tandon, Sachet Tandon", file: "Dilbara_spotdown.org.mp3" },
    { title: "Dilliwaali Girlfriend", artist: "Arijit Singh, Sunidhi Chauhan", file: "Dilliwaali Girlfriend_spotdown.org.mp3" },
    { title: "Dj Waley Babu", artist: "Badshah, Aastha Gill", file: "Dj Waley Babu (feat. Aastha Gill)_spotdown.org.mp3" },
    { title: "Do Dhaari Talwaar", artist: "Shahid Mallya, Shweta Pandit", file: "Do Dhaari Talwaar_spotdown.org.mp3" },
    { title: "Do U Know", artist: "Diljit Dosanjh", file: "Do U Know_spotdown.org.mp3" },
    { title: "Drama Queen", artist: "Shreya Ghoshal, Vishal Dadlani", file: "Drama Queen_spotdown.org.mp3" },
    { title: "Dreamum Wakeupum", artist: "Sowmya Raoh", file: "Dreamum Wakeupum_spotdown.org.mp3" },
    { title: "Enna Sona", artist: "Arijit Singh, A.R. Rahman", file: "Enna Sona_spotdown.org.mp3" },
    { title: "Galat Baat Hai", artist: "Neeti Mohan, Javed Ali", file: "Galat Baat Hai_spotdown.org.mp3" },
    { title: "Ganpat", artist: "Mika Singh", file: "Ganpat_spotdown.org.mp3" },
    { title: "Ghagra", artist: "Vishal Dadlani, Rekha Bhardwaj", file: "Ghagra_spotdown.org.mp3" },
    { title: "Gucci", artist: "Aroob Khan", file: "Gucci_spotdown.org.mp3" },
    { title: "Gulaabo", artist: "Vishal Dadlani, Anusha Mani", file: "Gulaabo_spotdown.org.mp3" },
    { title: "Gypsy", artist: "Pranjal Dahiya, GD Kaur", file: "Gypsy (feat. Pranjal Dahiya )_spotdown.org.mp3" },
    { title: "Hai Rama", artist: "Hariharan, Swarnalatha", file: "Hai Rama_spotdown.org.mp3" },
    { title: "Halkat Jawani", artist: "Sunidhi Chauhan", file: "Halkat Jawani_spotdown.org.mp3" },
    { title: "Hoth Rasiley", artist: "Pritam, Shankar Mahadevan", file: "Hoth Rasiley_spotdown.org.mp3" },
    { title: "Jadoo Ki Jhappi", artist: "Mika Singh, Neha Kakkar", file: "Jadoo Ki Jhappi_spotdown.org.mp3" },
    { title: "Jhalla Wallah", artist: "Shreya Ghoshal", file: "Jhalla Wallah_spotdown.org.mp3" },
    { title: "Kajra Re", artist: "Alisha Chinai, Shankar Mahadevan", file: "Kajra Re_spotdown.org.mp3" },
    { title: "Kamariya", artist: "Darshan Raval, Dj Chetas", file: "Kamariya_spotdown.org.mp3" },
    { title: "Kamli", artist: "Sunidhi Chauhan", file: "Kamli_spotdown.org.mp3" },
    { title: "Kiya Kiya", artist: "Anand Raj Anand", file: "Kiya Kiya_spotdown.org.mp3" },
    { title: "Laal Pari", artist: "Yo Yo Honey Singh", file: "Laal Pari (From _Housefull 5_)_spotdown.org.mp3" },
    { title: "Lahu Munh Lag Gaya", artist: "Shail Hada", file: "Lahu Munh Lag Gaya_spotdown.org.mp3" },
    { title: "Laila Main Laila", artist: "Pawni Pandey", file: "Laila Main Laila_spotdown.org.mp3" },
    { title: "Laila", artist: "Sunidhi Chauhan", file: "Laila_spotdown.org.mp3" },
    { title: "Lat Lag Gayee", artist: "Benny Dayal, Shalmali Kholgade", file: "Lat Lag Gayee_spotdown.org.mp3" },
    { title: "Latoo", artist: "Shreya Ghoshal", file: "Latoo_spotdown.org.mp3" },
    { title: "Le Le Mazaa Le", artist: "Soumya Rao", file: "Le Le Mazaa Le_spotdown.org.mp3" },
    { title: "Love Dose", artist: "Yo Yo Honey Singh", file: "Love Dose_spotdown.org.mp3" },
    { title: "Main Badhiya Tu Bhi Badhiya", artist: "Sonu Nigam, Sunidhi Chauhan", file: "Main Badhiya Tu Bhi Badhiya (From _Sanju_)_spotdown.org.mp3" },
    { title: "Mayya Mayya", artist: "Maryem Tollar, Chinmayi", file: "Mayya Mayya_spotdown.org.mp3" },
    { title: "Mayya", artist: "A.R. Rahman", file: "Mayya_spotdown.org.mp3" },
    { title: "Mera Naam Mary", artist: "Chinmayi Sripada", file: "Mera Naam Mary (From _Brothers_)_spotdown.org.mp3" },
    { title: "Milegi Milegi", artist: "Mika Singh, Sachin-Jigar", file: "Milegi Milegi (From _Stree_)_spotdown.org.mp3" },
    { title: "Oh Girl You're Mine", artist: "Loy Mendonsa, Tarannum Mallik", file: "Oh Girl You're Mine ._spotdown.org.mp3" },
    { title: "Oo Antava Oo Oo Antava", artist: "Indravathi Chauhan", file: "Oo Antava Oo Oo Antava_spotdown.org.mp3" },
    { title: "Ooh La La", artist: "Bappi Lahiri, Shreya Ghoshal", file: "Ooh La La_spotdown.org.mp3" },
    { title: "Pinky (From Zanjeer)", artist: "Mamta Sharma, Meet Bros", file: "Pinky (From _Zanjeer_)_spotdown.org.mp3" },
    { title: "Pinky", artist: "Mamta Sharma", file: "Pinky_spotdown.org.mp3" },
    { title: "Piya More", artist: "Mika Singh, Neeti Mohan", file: "Piya More_spotdown.org.mp3" },
    { title: "Pungi", artist: "Mika Singh", file: "Pungi_spotdown.org.mp3" },
    { title: "Ram Chahe Leela", artist: "Bhoomi Trivedi", file: "Ram Chahe Leela_spotdown.org.mp3" },
    { title: "Ramta Jogi", artist: "Sukhwinder Singh, Alka Yagnik", file: "Ramta Jogi_spotdown.org.mp3" },
    { title: "Right Now Now", artist: "Sunidhi Chauhan, Suzanne D'Mello", file: "Right Now Now_spotdown.org.mp3" },
    { title: "Saiyaan Superstar", artist: "Tulsi Kumar", file: "Saiyaan Superstar_spotdown.org.mp3" },
    { title: "Sheesha", artist: "Diler Kharkiya", file: "Sheesha - Aakhya Mai Aakh Ghali Jo Bairan_spotdown.org.mp3" },
    { title: "Shuddh Desi Romance", artist: "Benny Dayal, Shalmali Kholgade", file: "Shuddh Desi Romance_spotdown.org.mp3" },
    { title: "Taras (From Munjya)", artist: "Jasmine Sandlas, Sachin-Jigar", file: "Taras - From _Munjya__spotdown.org.mp3" },
    { title: "Tattoo", artist: "Yo Yo Honey Singh", file: "Tattoo_spotdown.org.mp3" },
    { title: "Tera Mera Rishta", artist: "Mustafa Zahid", file: "Tera Mera Rishta - Original Version_spotdown.org.mp3" },
    { title: "Thumkeshwari", artist: "Ash King, Rashmeet Kaur, Sachin-Jigar", file: "Thumkeshwari_spotdown.org.mp3" },
    { title: "Tinku Jiya", artist: "Mamta Sharma, Javed Ali", file: "Tinku Jiya_spotdown.org.mp3" },
    { title: "Tip Tip Barsa Paani", artist: "Udit Narayan, Alka Yagnik", file: "Tip Tip Barsa Paani - From _Mohra__spotdown.org.mp3" },
    { title: "Toh Phir Aao", artist: "Mustafa Zahid", file: "Toh Phir Aao - Original Version_spotdown.org.mp3" },
    { title: "Tu Cheez Badi Hain", artist: "Udit Narayan, Kavita Krishnamurthy", file: "Tu Cheez Badi Hain (From _Mohra_)_spotdown.org.mp3" },
    { title: "Tu Mera Hero", artist: "Mika Singh, Shefali Alvares", file: "Tu Mera Hero_spotdown.org.mp3" },
    { title: "Tu Mere Agal Bagal Hai", artist: "Mika Singh, Pritam", file: "Tu Mere Agal Bagal Hai_spotdown.org.mp3" },
    { title: "Tum Hi Ho Bandhu", artist: "Neeraj Shridhar, Kavita Seth", file: "Tum Hi Ho Bandhu_spotdown.org.mp3" },
    { title: "Ucha Lamba Kad", artist: "Anand Raj Anand, Kalpana Patowary", file: "Ucha Lamba Kad_spotdown.org.mp3" },
    { title: "Ude Dil Befikre", artist: "Benny Dayal", file: "Ude Dil Befikre_spotdown.org.mp3" },
    { title: "Vele", artist: "Vishal Dadlani, Shekhar Ravjiani", file: "Vele_spotdown.org.mp3" },
    { title: "Wakhra Swag", artist: "Navv Inder, Badshah", file: "Wakhra Swag_spotdown.org.mp3" },
    { title: "Woh Lamhe Woh Baatein", artist: "Atif Aslam", file: "Woh Lamhe Woh Baatein_spotdown.org.mp3" },
    { title: "Yeh Mera Dil (Dance Mix)", artist: "Asha Bhosle", file: "Yeh Mera Dil - Don 78 - Compilation - Yeh Mera Dil - Dance Mix_spotdown.org.mp3" },
    { title: "Zara Zara Touch Me", artist: "Monali Thakur", file: "Zara Zara Touch Me_spotdown.org.mp3" }
];

// ===== DOM ELEMENTS =====
const audio = document.getElementById('audioPlayer');
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
let isSeeking = false;
let hudTimeout = null;

// ===== INITIALIZE =====
function init() {
    audio.volume = 0.9;
    loadTrack(0, false, false);
    bindEvents();
}

// ===== LOAD TRACK (FULL AUDIO FILE) =====
function loadTrack(index, autoPlay = true, showHud = true) {
    if (index < 0) index = PLAYLIST.length - 1;
    if (index >= PLAYLIST.length) index = 0;
    currentIndex = index;

    const track = PLAYLIST[index];
    songTitle.textContent = track.title;
    songArtist.textContent = track.artist;
    audio.src = `assets/audio/${encodeURIComponent(track.file)}`;

    progressFill.style.width = '0%';
    progressDot.style.left = '0%';
    timeLabel.textContent = '0:00 / 0:00';

    if (showHud) {
        showHUD('🎵', track.title);
    }

    if (autoPlay) {
        audio.play().then(() => {
            isPlaying = true;
            updatePlayIcon();
        }).catch(() => {
            isPlaying = false;
            updatePlayIcon();
        });
    }
}

// ===== TOGGLE PLAY / PAUSE =====
function togglePlay() {
    triggerPillPulse();
    if (audio.paused) {
        audio.play().then(() => {
            isPlaying = true;
            updatePlayIcon();
            showHUD('▶', 'Play');
        }).catch(err => console.log('Playback error:', err));
    } else {
        audio.pause();
        isPlaying = false;
        updatePlayIcon();
        showHUD('⏸', 'Pause');
    }
}

// ===== SEEK RELATIVE =====
function seekRelative(deltaSeconds) {
    if (!audio.duration) return;
    const newTime = Math.max(0, Math.min(audio.currentTime + deltaSeconds, audio.duration));
    audio.currentTime = newTime;
    updateTimeline();

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
    audio.muted = !audio.muted;
    showHUD(audio.muted ? '🔇' : '🔊', audio.muted ? 'Muted' : 'Unmuted');
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

function updateTimeline() {
    if (!audio.duration || isSeeking) return;
    const cur = audio.currentTime || 0;
    const dur = audio.duration || 0;
    const pct = (cur / dur) * 100;

    progressFill.style.width = `${pct}%`;
    progressDot.style.left = `${pct}%`;
    timeLabel.textContent = `${formatTime(cur)} / ${formatTime(dur)}`;
}

// ===== SEEK CLICK & DRAG =====
function seek(e) {
    const rect = progressBarWrap.getBoundingClientRect();
    const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const offsetX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const pct = offsetX / rect.width;

    if (audio.duration) {
        audio.currentTime = pct * audio.duration;
        progressFill.style.width = `${pct * 100}%`;
        progressDot.style.left = `${pct * 100}%`;
        timeLabel.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
}

// ===== EVENT LISTENERS =====
function bindEvents() {
    btnPlay.addEventListener('click', togglePlay);
    btnPrev.addEventListener('click', () => loadTrack(currentIndex - 1, true));
    btnNext.addEventListener('click', () => loadTrack(currentIndex + 1, true));

    audio.addEventListener('play', () => {
        isPlaying = true;
        updatePlayIcon();
    });

    audio.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayIcon();
    });

    audio.addEventListener('timeupdate', updateTimeline);

    audio.addEventListener('loadedmetadata', () => {
        timeLabel.textContent = `0:00 / ${formatTime(audio.duration)}`;
    });

    audio.addEventListener('ended', () => {
        loadTrack(currentIndex + 1, true, false);
    });

    // Seek Click & Drag
    progressBarWrap.addEventListener('mousedown', (e) => {
        isSeeking = true;
        seek(e);
    });

    document.addEventListener('mousemove', (e) => {
        if (isSeeking) seek(e);
    });

    document.addEventListener('mouseup', () => {
        isSeeking = false;
    });

    // Touch Support for mobile
    progressBarWrap.addEventListener('touchstart', (e) => {
        isSeeking = true;
        seek(e);
    }, { passive: true });

    progressBarWrap.addEventListener('touchmove', (e) => {
        if (isSeeking) seek(e);
    }, { passive: true });

    progressBarWrap.addEventListener('touchend', () => {
        isSeeking = false;
    });

    // Modal Events
    if (btnShortcuts) btnShortcuts.addEventListener('click', toggleShortcutsModal);
    if (btnCloseModal) btnCloseModal.addEventListener('click', () => modalBackdrop.classList.remove('open'));
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) modalBackdrop.classList.remove('open');
        });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowRight':
            case 'KeyL':
                e.preventDefault();
                seekRelative(e.shiftKey ? 10 : 5);
                break;
            case 'ArrowLeft':
            case 'KeyJ':
                e.preventDefault();
                seekRelative(e.shiftKey ? -10 : -5);
                break;
            case 'KeyN':
            case 'Period':
                e.preventDefault();
                loadTrack(currentIndex + 1, true);
                break;
            case 'KeyP':
            case 'Comma':
                e.preventDefault();
                loadTrack(currentIndex - 1, true);
                break;
            case 'KeyR':
                e.preventDefault();
                playRandom();
                break;
            case 'KeyM':
                e.preventDefault();
                toggleMute();
                break;
            case 'Slash':
            case 'KeyH':
                if (e.shiftKey || e.code === 'KeyH') {
                    e.preventDefault();
                    toggleShortcutsModal();
                }
                break;
            case 'Escape':
                if (modalBackdrop && modalBackdrop.classList.contains('open')) {
                    modalBackdrop.classList.remove('open');
                }
                break;
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
