// ===== COMPLETE PLAYLIST DATA (FULL LENGTH BANGERS) =====
const PLAYLIST = [
    { title: "Pink Lips", artist: "Meet Bros Anjjan, Khushboo Grewal", file: "Pink Lips_spotdown.org.mp3", cover: "assets/images/covers/pink_lips.jpg" },
    { title: "Paani Waala Dance", artist: "Ikka, Arko, Shraddha Pandit", file: "Paani Waala Dance_spotdown.org.mp3", cover: "assets/images/covers/paani_waala_dance.jpg" },
    { title: "Aaj Ki Raat", artist: "Sachin-Jigar, Madhubanti Bagchi", file: "Aaj Ki Raat (From _Stree 2_)_spotdown.org.mp3", cover: "assets/images/covers/aaj_ki_raat__from__stree_2.jpg" },
    { title: "Aayi Nai", artist: "Sachin-Jigar, Pawan Singh, Simran Choudhary", file: "Aayi Nai (From _Stree 2_)_spotdown.org.mp3", cover: "assets/images/covers/aayi_nai__from__stree_2.jpg" },
    { title: "Garmi", artist: "Badshah, Neha Kakkar, Varun Dhawan", file: "Garmi (From _Street Dancer 3D_) (feat. Varun Dhawan)_spotdown.org.mp3", cover: "assets/images/covers/garmi__from__street_dancer_3d____feat__varun_dhawan.jpg" },
    { title: "O Saki Saki", artist: "Neha Kakkar, Tulsi Kumar, B Praak", file: "O Saki Saki (From _Batla House_)_spotdown.org.mp3", cover: "assets/images/covers/o_saki_saki__from__batla_house.jpg" },
    { title: "Party All Night", artist: "Yo Yo Honey Singh", file: "Party All Night (From _Boss_)_spotdown.org.mp3", cover: "assets/images/covers/party_all_night__from__boss.jpg" },
    { title: "Sheila Ki Jawani", artist: "Sunidhi Chauhan, Vishal Dadlani", file: "Sheila Ki Jawani_spotdown.org.mp3", cover: "assets/images/covers/sheila_ki_jawani.jpg" },
    { title: "Munni Badnaam", artist: "Mamta Sharma, Aishwarya Nigam", file: "Munni Badnaam_spotdown.org.mp3", cover: "assets/images/covers/munni_badnaam.jpg" },
    { title: "Chikni Chameli", artist: "Shreya Ghoshal, Ajay-Atul", file: "Chikni Chameli_spotdown.org.mp3", cover: "assets/images/covers/chikni_chameli.jpg" },
    { title: "Afghan Jalebi", artist: "Pritam, Asrar", file: "Afghan Jalebi (Film Version)_spotdown.org.mp3", cover: "assets/images/covers/afghan_jalebi__film_version.jpg" },
    { title: "Baby Doll", artist: "Meet Bros Anjjan, Kanika Kapoor", file: "Baby Doll_spotdown.org.mp3", cover: "assets/images/covers/baby_doll.jpg" },
    { title: "Aa Re Pritam Pyaare", artist: "Sajid-Wajid, Mamta Sharma", file: "Aa Re Pritam Pyaare_spotdown.org.mp3", cover: "assets/images/covers/aa_re_pritam_pyaare.jpg" },
    { title: "Aa Toh Sahi", artist: "Meet Bros, Neha Kakkar", file: "Aa Toh Sahi_spotdown.org.mp3", cover: "assets/images/covers/aa_toh_sahi.jpg" },
    { title: "Aadat", artist: "Atif Aslam, Jal", file: "Aadat_spotdown.org.mp3", cover: "assets/images/covers/aadat.jpg" },
    { title: "Aao Kabhi Haveli Pe", artist: "Badshah, Nikhita Gandhi", file: "Aao Kabhi Haveli Pe_spotdown.org.mp3", cover: "assets/images/covers/aao_kabhi_haveli_pe.jpg" },
    { title: "Aao Raja", artist: "Yo Yo Honey Singh, Neha Kakkar", file: "Aao Raja_spotdown.org.mp3", cover: "assets/images/covers/aao_raja.jpg" },
    { title: "Aga Bai", artist: "Shalmali Kholgade, Monali Thakur", file: "Aga Bai_spotdown.org.mp3", cover: "assets/images/covers/aga_bai.jpg" },
    { title: "Allah Maaf Kare", artist: "Sonu Nigam, Shilpa Rao", file: "Allah Maaf Kare_spotdown.org.mp3", cover: "assets/images/covers/allah_maaf_kare.jpg" },
    { title: "Anarkali Disco Chali", artist: "Mamta Sharma, Sukhwinder Singh", file: "Anarkali Disco Chali_spotdown.org.mp3", cover: "assets/images/covers/anarkali_disco_chali.jpg" },
    { title: "Ang Laga De", artist: "Shreya Ghoshal, Osman Mir", file: "Ang Laga De_spotdown.org.mp3", cover: "assets/images/covers/ang_laga_de.jpg" },
    { title: "Angreji Beat", artist: "Yo Yo Honey Singh, Gippy Grewal", file: "Angreji Beat_spotdown.org.mp3", cover: "assets/images/covers/angreji_beat.jpg" },
    { title: "Babli Badmaash", artist: "Sunidhi Chauhan", file: "Babli Badmaash_spotdown.org.mp3", cover: "assets/images/covers/babli_badmaash.jpg" },
    { title: "Bairan", artist: "Diler Kharkiya", file: "Bairan_spotdown.org.mp3", cover: "assets/images/covers/bairan.jpg" },
    { title: "Balma", artist: "Sreerama Chandra, Shreya Ghoshal", file: "Balma_spotdown.org.mp3", cover: "assets/images/covers/balma.jpg" },
    { title: "Beedi", artist: "Sunidhi Chauhan, Sukhwinder Singh", file: "Beedi_spotdown.org.mp3", cover: "assets/images/covers/beedi.jpg" },
    { title: "Billo Rani", artist: "Anand Raj Anand, Richa Sharma", file: "Billo Rani_spotdown.org.mp3", cover: "assets/images/covers/billo_rani.jpg" },
    { title: "Blue Eyes", artist: "Yo Yo Honey Singh", file: "Blue Eyes_spotdown.org.mp3", cover: "assets/images/covers/blue_eyes.jpg" },
    { title: "Chaar Botal Vodka", artist: "Yo Yo Honey Singh", file: "Chaar Botal Vodka (From _Ragini Mms 2_)_spotdown.org.mp3", cover: "assets/images/covers/chaar_botal_vodka__from__ragini_mms_2.jpg" },
    { title: "Character Dheela", artist: "Neeraj Shridhar, Amrita Kak", file: "Character Dheela_spotdown.org.mp3", cover: "assets/images/covers/character_dheela.jpg" },
    { title: "Chhaliya", artist: "Sunidhi Chauhan, Sukhwinder Singh", file: "Chhaliya_spotdown.org.mp3", cover: "assets/images/covers/chhaliya.jpg" },
    { title: "Chokra Jawaan", artist: "Vishal Dadlani, Sunidhi Chauhan", file: "Chokra Jawaan_spotdown.org.mp3", cover: "assets/images/covers/chokra_jawaan.jpg" },
    { title: "Dilbara", artist: "Parampara Tandon, Sachet Tandon", file: "Dilbara_spotdown.org.mp3", cover: "assets/images/covers/dilbara.jpg" },
    { title: "Dilliwaali Girlfriend", artist: "Arijit Singh, Sunidhi Chauhan", file: "Dilliwaali Girlfriend_spotdown.org.mp3", cover: "assets/images/covers/dilliwaali_girlfriend.jpg" },
    { title: "Dj Waley Babu", artist: "Badshah, Aastha Gill", file: "Dj Waley Babu (feat. Aastha Gill)_spotdown.org.mp3", cover: "assets/images/covers/dj_waley_babu__feat__aastha_gill.jpg" },
    { title: "Do Dhaari Talwaar", artist: "Shahid Mallya, Shweta Pandit", file: "Do Dhaari Talwaar_spotdown.org.mp3", cover: "assets/images/covers/do_dhaari_talwaar.jpg" },
    { title: "Do U Know", artist: "Shaan , Shreya Choshal", file: "Do U Know_spotdown.org.mp3", cover: "assets/images/covers/do_u_know.jpg" },
    { title: "Drama Queen", artist: "Shreya Ghoshal, Vishal Dadlani", file: "Drama Queen_spotdown.org.mp3", cover: "assets/images/covers/drama_queen.jpg" },
    { title: "Dreamum Wakeupum", artist: "Sowmya Raoh", file: "Dreamum Wakeupum_spotdown.org.mp3", cover: "assets/images/covers/dreamum_wakeupum.jpg" },
    { title: "Enna Sona", artist: "Arijit Singh, A.R. Rahman", file: "Enna Sona_spotdown.org.mp3", cover: "assets/images/covers/enna_sona.jpg" },
    { title: "Galat Baat Hai", artist: "Neeti Mohan, Javed Ali", file: "Galat Baat Hai_spotdown.org.mp3", cover: "assets/images/covers/galat_baat_hai.jpg" },
    { title: "Ganpat", artist: "Mika Singh", file: "Ganpat_spotdown.org.mp3", cover: "assets/images/covers/ganpat.jpg" },
    { title: "Ghagra", artist: "Vishal Dadlani, Rekha Bhardwaj", file: "Ghagra_spotdown.org.mp3", cover: "assets/images/covers/ghagra.jpg" },
    { title: "Gucci", artist: "Aroob Khan", file: "Gucci_spotdown.org.mp3", cover: "assets/images/covers/gucci.jpg" },
    { title: "Gulaabo", artist: "Vishal Dadlani, Anusha Mani", file: "Gulaabo_spotdown.org.mp3", cover: "assets/images/covers/gulaabo.jpg" },
    { title: "Gypsy", artist: "Pranjal Dahiya, GD Kaur", file: "Gypsy (feat. Pranjal Dahiya )_spotdown.org.mp3", cover: "assets/images/covers/gypsy__feat__pranjal_dahiya.jpg" },
    { title: "Hai Rama", artist: "Hariharan, Swarnalatha", file: "Hai Rama_spotdown.org.mp3", cover: "assets/images/covers/hai_rama.jpg" },
    { title: "Halkat Jawani", artist: "Sunidhi Chauhan", file: "Halkat Jawani_spotdown.org.mp3", cover: "assets/images/covers/halkat_jawani.jpg" },
    { title: "Hoth Rasiley", artist: "Pritam, Shankar Mahadevan", file: "Hoth Rasiley_spotdown.org.mp3", cover: "assets/images/covers/hoth_rasiley.jpg" },
    { title: "Jadoo Ki Jhappi", artist: "Mika Singh, Neha Kakkar", file: "Jadoo Ki Jhappi_spotdown.org.mp3", cover: "assets/images/covers/jadoo_ki_jhappi.jpg" },
    { title: "Jhalla Wallah", artist: "Shreya Ghoshal", file: "Jhalla Wallah_spotdown.org.mp3", cover: "assets/images/covers/jhalla_wallah.jpg" },
    { title: "Kajra Re", artist: "Alisha Chinai, Shankar Mahadevan", file: "Kajra Re_spotdown.org.mp3", cover: "assets/images/covers/kajra_re.jpg" },
    { title: "Kamariya", artist: "Darshan Raval, Dj Chetas", file: "Kamariya_spotdown.org.mp3", cover: "assets/images/covers/kamariya.jpg" },
    { title: "Kamli", artist: "Sunidhi Chauhan", file: "Kamli_spotdown.org.mp3", cover: "assets/images/covers/kamli.jpg" },
    { title: "Kiya Kiya", artist: "Anand Raj Anand", file: "Kiya Kiya_spotdown.org.mp3", cover: "assets/images/covers/kiya_kiya.jpg" },
    { title: "Laal Pari", artist: "Yo Yo Honey Singh", file: "Laal Pari (From _Housefull 5_)_spotdown.org.mp3", cover: "assets/images/covers/laal_pari__from__housefull_5.jpg" },
    { title: "Lahu Munh Lag Gaya", artist: "Shail Hada", file: "Lahu Munh Lag Gaya_spotdown.org.mp3", cover: "assets/images/covers/lahu_munh_lag_gaya.jpg" },
    { title: "Laila Main Laila", artist: "Pawni Pandey", file: "Laila Main Laila_spotdown.org.mp3", cover: "assets/images/covers/laila_main_laila.jpg" },
    { title: "Laila", artist: "Sunidhi Chauhan", file: "Laila_spotdown.org.mp3", cover: "assets/images/covers/laila.jpg" },
    { title: "Lat Lag Gayee", artist: "Benny Dayal, Shalmali Kholgade", file: "Lat Lag Gayee_spotdown.org.mp3", cover: "assets/images/covers/lat_lag_gayee.jpg" },
    { title: "Latoo", artist: "Shreya Ghoshal", file: "Latoo_spotdown.org.mp3", cover: "assets/images/covers/latoo.jpg" },
    { title: "Le Le Mazaa Le", artist: "Soumya Rao", file: "Le Le Mazaa Le_spotdown.org.mp3", cover: "assets/images/covers/le_le_mazaa_le.jpg" },
    { title: "Love Dose", artist: "Yo Yo Honey Singh", file: "Love Dose_spotdown.org.mp3", cover: "assets/images/covers/love_dose.jpg" },
    { title: "Main Badhiya Tu Bhi Badhiya", artist: "Sonu Nigam, Sunidhi Chauhan", file: "Main Badhiya Tu Bhi Badhiya (From _Sanju_)_spotdown.org.mp3", cover: "assets/images/covers/main_badhiya_tu_bhi_badhiya__from__sanju.jpg" },
    { title: "Mayya Mayya", artist: "Maryem Tollar, Chinmayi", file: "Mayya Mayya_spotdown.org.mp3", cover: "assets/images/covers/mayya_mayya.jpg" },
    { title: "Mayya", artist: "A.R. Rahman", file: "Mayya_spotdown.org.mp3", cover: "assets/images/covers/mayya.jpg" },
    { title: "Mera Naam Mary", artist: "Chinmayi Sripada", file: "Mera Naam Mary (From _Brothers_)_spotdown.org.mp3", cover: "assets/images/covers/mera_naam_mary__from__brothers.jpg" },
    { title: "Milegi Milegi", artist: "Mika Singh, Sachin-Jigar", file: "Milegi Milegi (From _Stree_)_spotdown.org.mp3", cover: "assets/images/covers/milegi_milegi__from__stree.jpg" },
    { title: "Oh Girl You're Mine", artist: "Loy Mendonsa, Tarannum Mallik", file: "Oh Girl You're Mine ._spotdown.org.mp3", cover: "assets/images/covers/oh_girl_you_re_mine.jpg" },
    { title: "Oo Antava Oo Oo Antava", artist: "Indravathi Chauhan", file: "Oo Antava Oo Oo Antava_spotdown.org.mp3", cover: "assets/images/covers/oo_antava_oo_oo_antava.jpg" },
    { title: "Ooh La La", artist: "Bappi Lahiri, Shreya Ghoshal", file: "Ooh La La_spotdown.org.mp3", cover: "assets/images/covers/ooh_la_la.jpg" },
    { title: "Pinky (Zanjeer)", artist: "Mamta Sharma, Meet Bros", file: "Pinky (From _Zanjeer_)_spotdown.org.mp3", cover: "assets/images/covers/pinky__from__zanjeer.jpg" },
    { title: "Pinky", artist: "Mamta Sharma", file: "Pinky_spotdown.org.mp3", cover: "assets/images/covers/pinky.jpg" },
    { title: "Piya More", artist: "Mika Singh, Neeti Mohan", file: "Piya More_spotdown.org.mp3", cover: "assets/images/covers/piya_more.jpg" },
    { title: "Pungi", artist: "Mika Singh", file: "Pungi_spotdown.org.mp3", cover: "assets/images/covers/pungi.jpg" },
    { title: "Ram Chahe Leela", artist: "Bhoomi Trivedi", file: "Ram Chahe Leela_spotdown.org.mp3", cover: "assets/images/covers/ram_chahe_leela.jpg" },
    { title: "Ramta Jogi", artist: "Sukhwinder Singh, Alka Yagnik", file: "Ramta Jogi_spotdown.org.mp3", cover: "assets/images/covers/ramta_jogi.jpg" },
    { title: "Right Now Now", artist: "Sunidhi Chauhan, Suzanne D'Mello", file: "Right Now Now_spotdown.org.mp3", cover: "assets/images/covers/right_now_now.jpg" },
    { title: "Saiyaan Superstar", artist: "Tulsi Kumar", file: "Saiyaan Superstar_spotdown.org.mp3", cover: "assets/images/covers/saiyaan_superstar.jpg" },
    { title: "Sheesha", artist: "Diler Kharkiya", file: "Sheesha - Aakhya Mai Aakh Ghali Jo Bairan_spotdown.org.mp3", cover: "assets/images/covers/sheesha_-_aakhya_mai_aakh_ghali_jo_bairan.jpg" },
    { title: "Shuddh Desi Romance", artist: "Benny Dayal, Shalmali Kholgade", file: "Shuddh Desi Romance_spotdown.org.mp3", cover: "assets/images/covers/shuddh_desi_romance.jpg" },
    { title: "Taras", artist: "Jasmine Sandlas, Sachin-Jigar", file: "Taras - From _Munjya__spotdown.org.mp3", cover: "assets/images/covers/taras_-_from__munjya.jpg" },
    { title: "Tattoo", artist: "Yo Yo Honey Singh", file: "Tattoo_spotdown.org.mp3", cover: "assets/images/covers/tattoo.jpg" },
    { title: "Tera Mera Rishta", artist: "Mustafa Zahid", file: "Tera Mera Rishta - Original Version_spotdown.org.mp3", cover: "assets/images/covers/tera_mera_rishta_-_original_version.jpg" },
    { title: "Thumkeshwari", artist: "Ash King, Rashmeet Kaur, Sachin-Jigar", file: "Thumkeshwari_spotdown.org.mp3", cover: "assets/images/covers/thumkeshwari.jpg" },
    { title: "Tinku Jiya", artist: "Mamta Sharma, Javed Ali", file: "Tinku Jiya_spotdown.org.mp3", cover: "assets/images/covers/tinku_jiya.jpg" },
    { title: "Tip Tip Barsa Paani", artist: "Udit Narayan, Alka Yagnik", file: "Tip Tip Barsa Paani - From _Mohra__spotdown.org.mp3", cover: "assets/images/covers/tip_tip_barsa_paani_-_from__mohra.jpg" },
    { title: "Toh Phir Aao", artist: "Mustafa Zahid", file: "Toh Phir Aao - Original Version_spotdown.org.mp3", cover: "assets/images/covers/toh_phir_aao_-_original_version.jpg" },
    { title: "Tu Cheez Badi Hain", artist: "Udit Narayan, Kavita Krishnamurthy", file: "Tu Cheez Badi Hain (From _Mohra_)_spotdown.org.mp3", cover: "assets/images/covers/tu_cheez_badi_hain__from__mohra.jpg" },
    { title: "Tu Mera Hero", artist: "Mika Singh, Shefali Alvares", file: "Tu Mera Hero_spotdown.org.mp3", cover: "assets/images/covers/tu_mera_hero.jpg" },
    { title: "Tu Mere Agal Bagal Hai", artist: "Mika Singh, Pritam", file: "Tu Mere Agal Bagal Hai_spotdown.org.mp3", cover: "assets/images/covers/tu_mere_agal_bagal_hai.jpg" },
    { title: "Tum Hi Ho Bandhu", artist: "Neeraj Shridhar, Kavita Seth", file: "Tum Hi Ho Bandhu_spotdown.org.mp3", cover: "assets/images/covers/tum_hi_ho_bandhu.jpg" },
    { title: "Ucha Lamba Kad", artist: "Anand Raj Anand, Kalpana Patowary", file: "Ucha Lamba Kad_spotdown.org.mp3", cover: "assets/images/covers/ucha_lamba_kad.jpg" },
    { title: "Ude Dil Befikre", artist: "Benny Dayal", file: "Ude Dil Befikre_spotdown.org.mp3", cover: "assets/images/covers/ude_dil_befikre.jpg" },
    { title: "Vele", artist: "Vishal Dadlani, Shekhar Ravjiani", file: "Vele_spotdown.org.mp3", cover: "assets/images/covers/vele.jpg" },
    { title: "Wakhra Swag", artist: "Navv Inder, Badshah", file: "Wakhra Swag_spotdown.org.mp3", cover: "assets/images/covers/wakhra_swag.jpg" },
    { title: "Woh Lamhe Woh Baatein", artist: "Atif Aslam", file: "Woh Lamhe Woh Baatein_spotdown.org.mp3", cover: "assets/images/covers/woh_lamhe_woh_baatein.jpg" },
    { title: "Yeh Mera Dil", artist: "Asha Bhosle", file: "Yeh Mera Dil - Don 78 - Compilation - Yeh Mera Dil - Dance Mix_spotdown.org.mp3", cover: "assets/images/covers/yeh_mera_dil_-_don_78_-_compilation_-_yeh_mera_dil_-_dance_mix.jpg" },
    { title: "Zara Zara Touch Me", artist: "Monali Thakur", file: "Zara Zara Touch Me_spotdown.org.mp3", cover: "assets/images/covers/zara_zara_touch_me.jpg" }
];

// ===== DOM ELEMENTS =====
const audio = document.getElementById('audioPlayer');
const playerPill = document.getElementById('playerPill');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const playerArtImg = document.getElementById('playerArtImg');
const cdDisc = document.getElementById('cdDisc');
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

// ===== SHUFFLE QUEUE STATE =====
let playbackQueue = [];
let queueIndex = 0;
let isPlaying = false;
let isSeeking = false;
let hudTimeout = null;

// Slow / emotional / romantic songs that should NEVER play early in the session
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

function isSlowTrack(track) {
    if (!track) return false;
    const title = (track.title || '').toLowerCase();
    const file = (track.file || '').toLowerCase();
    return LATE_TRACK_KEYWORDS.some(kw => title.includes(kw) || file.includes(kw));
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Build Smart Queue:
// - Position 0 is ALWAYS "Pink Lips" (PLAYLIST[0]) or the current active track
// - Positions 1 to ~93 are pure randomized spicy/upbeat party & dance bangers
// - Slow/sad tracks (Aadat, Enna Sona, Toh Phir Aao, Tera Mera Rishta, Woh Lamhe, Jugraafiya, etc.)
//   are guaranteed NEVER to play early and are placed only at the very end of the playlist
function buildSmartQueue(firstIndex = 0) {
    const upbeatIndices = [];
    const slowIndices = [];

    for (let i = 0; i < PLAYLIST.length; i++) {
        if (i === firstIndex) continue;
        if (isSlowTrack(PLAYLIST[i])) {
            slowIndices.push(i);
        } else {
            upbeatIndices.push(i);
        }
    }

    const shuffledUpbeat = shuffleArray(upbeatIndices);
    const shuffledSlow = shuffleArray(slowIndices);

    return [firstIndex, ...shuffledUpbeat, ...shuffledSlow];
}

// Initialize Shuffle Queue:
function initShuffleQueue() {
    playbackQueue = buildSmartQueue(0);
    queueIndex = 0;
}

// ===== INITIALIZE =====
function init() {
    audio.volume = 0.9;
    initShuffleQueue();
    loadQueueTrack(0, false, false);
    bindEvents();
    updateClock();
    setInterval(updateClock, 1000);
    initOnlineCounter();
}

// ===== LIVE CLOCK (format: "1:33 am") =====
function updateClock() {
    const topClock = document.getElementById('topClock');
    if (!topClock) return;
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    topClock.textContent = `${hours}:${minutes} ${ampm}`;
}

// ===== LIVE ONLINE USER COUNTER SIMULATION =====
function initOnlineCounter() {
    const onlineEl = document.getElementById('onlineCount');
    if (!onlineEl) return;
    let count = 31;
    setInterval(() => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, +1
        count = Math.max(26, Math.min(39, count + change));
        onlineEl.textContent = count;
    }, 12000);
}

// ===== LOAD TRACK (BY PLAYLIST INDEX) =====
function loadTrack(index, autoPlay = true, showHud = true) {
    if (index < 0) index = PLAYLIST.length - 1;
    if (index >= PLAYLIST.length) index = 0;

    const track = PLAYLIST[index];
    songTitle.textContent = track.title;
    songArtist.textContent = track.artist;
    if (playerArtImg && track.cover) playerArtImg.src = track.cover;
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

// ===== LOAD TRACK BY QUEUE POSITION =====
function loadQueueTrack(pos, autoPlay = true, showHud = true) {
    if (playbackQueue.length === 0) initShuffleQueue();

    if (pos >= playbackQueue.length) {
        // Continuous looped smart shuffle
        const curIndex = playbackQueue[queueIndex] ?? 0;
        playbackQueue = buildSmartQueue(curIndex);
        pos = 1;
    } else if (pos < 0) {
        pos = playbackQueue.length - 1;
    }

    queueIndex = pos;
    const playlistIndex = playbackQueue[queueIndex];
    loadTrack(playlistIndex, autoPlay, showHud);
}

// ===== NEXT & PREVIOUS =====
function playNextTrack() {
    triggerPillPulse();
    loadQueueTrack(queueIndex + 1, true, true);
}

function playPrevTrack() {
    triggerPillPulse();
    loadQueueTrack(queueIndex - 1, true, true);
}

// ===== RESHUFFLE =====
function reshuffleAndPlay() {
    const curIndex = playbackQueue[queueIndex] ?? 0;
    playbackQueue = buildSmartQueue(curIndex);
    queueIndex = 0;
    showHUD('🔀', 'Shuffled');
    playNextTrack();
}

// ===== TOGGLE PLAY / PAUSE =====
function togglePlay() {
    triggerPillPulse();
    if (!audio.src || audio.src === '' || audio.src.endsWith('/')) {
        loadQueueTrack(queueIndex, true, true);
        return;
    }

    if (audio.paused) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                updatePlayIcon();
                showHUD('▶', 'Play');
            }).catch(err => {
                console.log('Playback error:', err);
                loadQueueTrack(queueIndex, true, true);
            });
        }
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

// ===== TOGGLE MUTE =====
function toggleMute() {
    audio.muted = !audio.muted;
    showHUD(audio.muted ? '🔇' : '🔊', audio.muted ? 'Muted' : 'Unmuted');
}

// ===== HUD TOAST NOTIFICATION =====
function showHUD(icon, text) {
    if (!hudPill || !hudIcon || !hudText) return;
    hudIcon.textContent = icon;
    hudText.textContent = text;
    hudPill.classList.add('visible');

    if (hudTimeout) clearTimeout(hudTimeout);
    hudTimeout = setTimeout(() => {
        hudPill.classList.remove('visible');
    }, 1400);
}

// ===== PILL PULSE ANIMATION =====
function triggerPillPulse() {
    if (!playerPill) return;
    playerPill.classList.remove('pulse');
    void playerPill.offsetWidth; // Force reflow
    playerPill.classList.add('pulse');
}

// ===== MODAL TOGGLE =====
function toggleShortcutsModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.toggle('open');
}

// ===== UI UPDATES =====
function updatePlayIcon() {
    if (isPlaying) {
        iconPlay.style.display = 'none';
        iconPause.style.display = 'block';
        if (cdDisc) cdDisc.classList.add('is-spinning');
    } else {
        iconPlay.style.display = 'block';
        iconPause.style.display = 'none';
        if (cdDisc) cdDisc.classList.remove('is-spinning');
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
    if (cdDisc) cdDisc.addEventListener('click', togglePlay);
    btnPrev.addEventListener('click', playPrevTrack);
    btnNext.addEventListener('click', playNextTrack);

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
        playNextTrack();
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

    // Keyboard Shortcuts (Space, K, J, L, N, P, R, M, ?, etc.)
    window.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

        const key = e.key || '';
        const code = e.code || '';
        const keyCode = e.keyCode || 0;

        // Space or 'K' -> Play / Pause
        if (code === 'Space' || key === ' ' || key === 'Spacebar' || keyCode === 32 || code === 'KeyK' || key === 'k' || key === 'K') {
            e.preventDefault();
            e.stopPropagation();
            togglePlay();
            return;
        }

        // Seek Forward (Right Arrow or L)
        if (code === 'ArrowRight' || key === 'ArrowRight' || code === 'KeyL' || key === 'l' || key === 'L') {
            e.preventDefault();
            seekRelative(e.shiftKey ? 10 : 5);
            return;
        }

        // Seek Backward (Left Arrow or J)
        if (code === 'ArrowLeft' || key === 'ArrowLeft' || code === 'KeyJ' || key === 'j' || key === 'J') {
            e.preventDefault();
            seekRelative(e.shiftKey ? -10 : -5);
            return;
        }

        // Next Song (N or >) -> Shuffled Next
        if (code === 'KeyN' || key === 'n' || key === 'N' || key === '>' || code === 'Period') {
            e.preventDefault();
            playNextTrack();
            return;
        }

        // Previous Song (P or <) -> Shuffled Prev
        if (code === 'KeyP' || key === 'p' || key === 'P' || key === '<' || code === 'Comma') {
            e.preventDefault();
            playPrevTrack();
            return;
        }

        // Shuffle / Random (R)
        if (code === 'KeyR' || key === 'r' || key === 'R') {
            e.preventDefault();
            reshuffleAndPlay();
            return;
        }

        // Mute / Unmute (M)
        if (code === 'KeyM' || key === 'm' || key === 'M') {
            e.preventDefault();
            toggleMute();
            return;
        }

        // Toggle Shortcuts Modal (? or H)
        if (key === '?' || (code === 'Slash' && e.shiftKey) || code === 'KeyH' || key === 'h' || key === 'H') {
            e.preventDefault();
            toggleShortcutsModal();
            return;
        }

        // Close Modal on Escape
        if (code === 'Escape' || key === 'Escape' || keyCode === 27) {
            if (modalBackdrop && modalBackdrop.classList.contains('open')) {
                e.preventDefault();
                modalBackdrop.classList.remove('open');
            }
        }
    }, { capture: true });
}

document.addEventListener('DOMContentLoaded', init);
