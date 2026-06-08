# Ollama AI Chat App

A local AI chat interface with an Iron Man HUD theme, built with Electron + Ollama.

## Features
- 🤖 Chat with any local Ollama model
- 🖼️ Image attachment support (works with llava-phi3, moondream, llava)
- ⏹️ Stop generation mid-response
- 🔴 Unload models from memory
- 💾 Chat history saved locally
- 🎨 Iron Man HUD theme (Orbitron font, cyan/dark UI)

---

## Requirements
- [Ollama](https://ollama.com/download) installed and running
- [Node.js](https://nodejs.org) (v18 or higher recommended)
- Git

---

## Installation

### Clone the repo
```bash
git clone https://github.com/Piyush1241/Ollama_theme_app.git
cd Ollama_theme_app
npm install
```

---

### Run in development (all platforms)
```bash
npx electron .
```

---

## Build & Install

### macOS (Apple Silicon — M1/M2/M3)
```bash
# Build
npx electron-packager . "Ollama AI" --platform=darwin --arch=arm64 --overwrite --icon=icon.icns

# Install
cp -r "Ollama AI-darwin-arm64/Ollama AI.app" /Applications/
open "/Applications/Ollama AI.app"
```

### macOS (Intel)
```bash
# Build
npx electron-packager . "Ollama AI" --platform=darwin --arch=x64 --overwrite --icon=icon.icns

# Install
cp -r "Ollama AI-darwin-x64/Ollama AI.app" /Applications/
open "/Applications/Ollama AI.app"
```

### Windows
```bash
# Build (run this on any platform)
npx electron-packager . "Ollama AI" --platform=win32 --arch=x64 --overwrite

# A folder called "Ollama AI-win32-x64" will be created
# Zip it and send to Windows user, or just run directly:
# Open "Ollama AI-win32-x64/Ollama AI.exe"
```
> **Note:** If the build times out downloading Electron, try using a mirror:
> ```bash
> ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/" npx electron-packager . "Ollama AI" --platform=win32 --arch=x64 --overwrite
> ```

### Linux
```bash
# Build
npx electron-packager . "Ollama AI" --platform=linux --arch=x64 --overwrite

# Run
cd "Ollama AI-linux-x64"
chmod +x "Ollama AI"
./"Ollama AI"
```

---

## Recommended Models
Pull any of these with Ollama before launching the app:

| Model | Use case | RAM needed |
|-------|----------|------------|
| `ollama pull llama3` | General chat | ~5GB |
| `ollama pull mistral` | Fast general chat | ~4GB |
| `ollama pull llava-phi3` | Image understanding | ~3GB |
| `ollama pull moondream` | Lightweight image model | ~2GB |

---

## Important Note
This app is a **UI only** — it talks to Ollama running locally on your machine.
Every user needs Ollama installed and at least one model pulled before using the app.
Your data never leaves your device.
