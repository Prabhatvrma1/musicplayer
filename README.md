# चटपटे गाने — Bollywood Music Player 🎵

A minimalist, high-aesthetic web music player designed with smooth video looping backgrounds and glassmorphism UI inspired by [saloon.wtf](https://saloon.wtf/).

## 📁 Project Structure
```text
├── assets/
│   ├── css/
│   │   └── style.css            # Frosted glassmorphism styles & responsive layout
│   ├── js/
│   │   └── app.js              # Playback engine, playlist queue & shortcuts
│   ├── images/
│   │   ├── panipuri.png         # Circular album artwork
│   │   ├── bg_clean.png         # Poster fallback image
│   │   └── Gemini_Generated_Image_autigpautigpauti.png
│   └── video/
│       ├── new_background.mp4   # Looping animated background scene
│       └── Good_if_possible_can_you_add_r.mp4
├── index.html                   # Main landing page
├── .gitignore
└── README.md
```

## ✨ Features
- 🎬 **Animated Background**: Looping ambient video backdrop (`new_background.mp4`).
- 🔮 **Glassmorphism Frosted Pill Player**: Sleek, compact capsule with frosted glass blur effect.
- 🥘 **Authentic Artwork**: Circular snack/chaat album icon.
- 📻 **Full Audio Playback**: Track skipping, seeking/scrubbing timeline, real-time timestamps, and keyboard controls.
- 🔗 **Spotify Link**: Quick-access badge linking to the curated Spotify playlist.

## ⌨️ Keyboard Shortcuts
- `Space`: Play / Pause
- `→` / `←`: Seek forward / backward by 5 seconds
- `N`: Next track
- `P`: Previous track

## 🚀 Getting Started
Simply serve the folder using any static HTTP server:
```bash
npx http-server . -p 8080
```
Open `http://localhost:8080` in your browser.
