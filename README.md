<div align="center">

# चटपटे गाने (Chatpate Gaane)
### *A Retro-Indian Aesthetic, Smart-Shuffled Bollywood Web Music Player*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-chatpategane.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://chatpategane.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Vercel Serverless](https://img.shields.io/badge/Vercel-Serverless%20API-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br/>

**[🌐 Experience Live Player](https://chatpategane.vercel.app)** • **[🎧 Spotify Curated Playlist](https://open.spotify.com/playlist/1DatcBStkkmYNY6KKvPbv4)** • **[⌨️ Keyboard Shortcuts](#-keyboard-shortcuts--controls)**

</div>

---

## 📖 Overview

**चटपटे गाने** is a boutique, web-based Bollywood streaming player inspired by nostalgic Indian street food culture and retro vinyl aesthetics. Built with vanilla modern JavaScript and custom CSS glassmorphism, it provides an instantaneous, ad-free listening experience with intelligent session queueing and on-demand 320kbps audio streaming.

---

## ✨ Key Features

### 🔀 1. Smart Energy-Aware Shuffle Engine
* **Fixed Kickoff**: Always opens session with the signature banger **"Pink Lips"**.
* **Guaranteed Early Banger**: Automatically queues **"Chittiyaan Kalaiyaan"** at track #2 or #3.
* **Pure Randomized Flow**: Subsequent high-energy dance and item tracks (*Garmi, Sheila Ki Jawani, Chikni Chameli, Munni Badnaam, Afghan Jalebi, etc.*) are randomized using an unbiased **Fisher-Yates shuffle algorithm**.
* **Slow Song Deferral**: Mellow, slow, or emotional tracks (*Aadat, Enna Sona, Toh Phir Aao, Tera Mera Rishta, Woh Lamhe*) are automatically partitioned and deferred to the tail end of the playlist queue to maintain high-energy playback.

### ⚡ 2. Dynamic 320kbps Cloud Streaming API
* **Zero Repo Bloat (0 MB)**: Expands the catalog across all 361+ songs without bloating git storage or hitting deployment limits.
* **On-Demand Edge Resolution**: Serverless `/api/stream` endpoint fetches official 320kbps master audio streams and 500x500 album art on-the-fly.
* **Predictive Background Prefetching**: Automatically pre-buffers the next track in the queue during playback for 0ms gapless transitions.
* **Hybrid Fallback**: Local master audio files take priority if present, switching to cloud CDN streams seamlessly.

### 🎨 3. Handcrafted Retro-Indian Aesthetic UI
* **Responsive Visual Scenery**:
  * **Desktop**: Ultrawide 16:9 panoramic riverside stall background (`desk.jpg`).
  * **Mobile**: Custom tailored 9:19.5 vertical portrait framing (`phone.png`).
* **Frosted Glass Capsule Player**: Ultra-sleek pill HUD with real-time seekbar, rotating vinyl disc artwork, track scrubbing, and interactive pulse feedback.
* **Live Dynamic Nav**: Real-time 12-hour digital clock with tabular numerals (`1:45 am`) and live user counter simulation.
* **Anti-Selection & Touch Protection**: Complete prevention of accidental mobile blue tap highlights, drag ghosts, and touch callouts.

---

## ⌨️ Keyboard Shortcuts & Controls

The player features comprehensive keyboard shortcuts with on-screen Heads-Up Display (HUD) toast alerts:

| Key | Action | Description |
| :--- | :--- | :--- |
| <kbd>Space</kbd> or <kbd>K</kbd> | **Play / Pause** | Toggle master audio playback |
| <kbd>→</kbd> or <kbd>L</kbd> | **Seek Forward** | Jump forward +5s (or +10s with <kbd>Shift</kbd>) |
| <kbd>←</kbd> or <kbd>J</kbd> | **Seek Backward** | Jump backward -5s (or -10s with <kbd>Shift</kbd>) |
| <kbd>N</kbd> or <kbd>&gt;</kbd> | **Next Track** | Advance to next smart-shuffled song |
| <kbd>P</kbd> or <kbd>&lt;</kbd> | **Previous Track** | Return to previous song in session history |
| <kbd>R</kbd> | **Reshuffle** | Re-randomize upcoming queue on the fly |
| <kbd>M</kbd> | **Mute / Unmute** | Toggle audio volume mute |
| <kbd>?</kbd> or <kbd>H</kbd> | **Shortcuts Modal** | Open on-screen keyboard controls help dialog |
| <kbd>Esc</kbd> | **Close Modal** | Dismiss any open dialog overlay |

---

## 📁 Project Structure

```text
chatpategane/
├── api/
│   └── stream.js                 # Vercel Serverless Function (320kbps CDN stream resolver)
├── assets/
│   ├── css/
│   │   └── style.css             # Glassmorphism, animations, responsive layouts & typography
│   ├── js/
│   │   ├── models/
│   │   │   ├── playlist.data.js  # Curated Bollywood party & item song dataset
│   │   │   └── queue.model.js    # Smart energy-aware queue & shuffle state machine
│   │   ├── services/
│   │   │   └── stream.service.js # Dynamic 320kbps stream resolver & prefetch cache
│   │   ├── views/
│   │   │   └── player.view.js    # UI rendering, animations, HUD toasts & live clock
│   │   ├── controllers/
│   │   │   └── player.controller.js # Playback coordinator, touch & keyboard shortcuts
│   │   └── main.js               # Application bootstrap entry point
│   └── images/
│       ├── desk.jpg              # High-resolution wide landscape desktop scene
│       ├── phone.png             # Balanced portrait mobile background scene
│       ├── panipuri.png          # Favicon and core brand asset
│       └── covers/               # High-resolution 500x500 album art covers
├── index.html                    # Semantic HTML5 app markup with SEO & OpenGraph tags
├── vercel.json                   # Serverless routing & deployment configuration
├── .gitignore
└── README.md
```

---

## 📡 API Reference

### `GET /api/stream`

Resolves on-demand 320kbps streaming URLs and cover art for any track dynamically.

#### Query Parameters:
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `query` | `string` | **Yes** | Song title and artist name (e.g. `Garmi Badshah`) |

#### Example Request:
```bash
curl -X GET "https://chatpategane.vercel.app/api/stream?query=Garmi+Badshah"
```

#### Example JSON Response:
```json
{
  "success": true,
  "title": "Garmi (feat. Varun Dhawan)",
  "artist": "Badshah, Neha Kakkar",
  "cover": "https://c.saavncdn.com/088/Street-Dancer-3D-Hindi-2020-500x500.jpg",
  "streamUrl": "https://ac.cf.saavncdn.com/088/e3e831f11e620afa4d853e3c74ef16a3_320.mp4?Expires=..."
}
```

---

## 🚀 Getting Started Locally

### Prerequisites
* [Node.js](https://nodejs.org/) (v18 or newer)
* Modern web browser (Chrome, Safari, Firefox, Edge)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Prabhatvrma1/plpayer.git
   cd plpayer
   ```

2. Start a local HTTP server:
   ```bash
   npx serve .
   ```
   *Or with Python:*
   ```bash
   python -m http.server 8080
   ```

3. Open your browser and navigate to:
   ```text
   http://localhost:8080
   ```

---

## 🌐 Deployment

### Deploying to Vercel
The project is pre-configured for 1-click deployment on [Vercel](https://vercel.com/):

```bash
npm i -g vercel
vercel
```

All serverless functions in `/api` and static assets in `/` will be deployed automatically with global Edge caching.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

Crafted with ❤️ for Bollywood Music Lovers • **[चटपटे गाने Live](https://chatpategane.vercel.app)**

</div>
