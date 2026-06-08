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
# Run: "Ollama AI-win32-x64/Ollama AI.exe"
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
> ✅ Personally tested on MacBook Air M1 8GB

```bash
ollama pull llava-phi3       # Image understanding
ollama pull deepseek-coder:1.3b  # Lightweight code assistant
ollama pull qwen2.5-coder:3b     # Advanced code completion
ollama pull llama3.2         # General chat & writing
```

| Model | Use case | RAM | Speed |
|-------|----------|-----|-------|
| `llava-phi3` | Image analysis, reading screenshots | ~3GB | Fast |
| `deepseek-coder:1.3b` | Quick code help, completions | ~1GB | Very fast |
| `qwen2.5-coder:3b` | Complex code, debugging | ~2GB | Fast |
| `llama3.2` | General chat, writing, Q&A | ~2GB | Fast |

---

## Tips for M1 8GB Users

macOS, CPU, GPU and RAM all share the same 8GB pool — so managing memory matters.

**1. Run one model at a time**
Each model loads into RAM when first used and stays there until unloaded.
Use the red **TERMINATE MODEL** button in the sidebar to free RAM before switching.

**2. Unload when done**
Ollama keeps models in memory for 5 minutes by default after your last message.
Click **TERMINATE MODEL** in the sidebar to instantly free that RAM.

**3. Best combos that fit in 8GB**
- `deepseek-coder:1.3b` + `llava-phi3` — code + vision, very comfortable
- `qwen2.5-coder:3b` + `llava-phi3` — better code + vision, tight but works
- `llama3.2` alone — leave headroom for macOS and other apps

**4. Close other apps**
Chrome, Slack, and other heavy apps eat into your unified memory.
Close them before running larger models like `qwen2.5-coder:3b`.

**5. Watch for slowdowns**
If responses suddenly get very slow, macOS is likely swapping to disk.
Unload the current model and try a smaller one.

**6. For image tasks**
Always use `llava-phi3` — it's the best vision model that comfortably fits in 8GB.
Unload your chat model first before sending images for best performance.

---

## Important Note
This app is a **UI only** — it talks to Ollama running locally on your machine.
Every user needs Ollama installed and at least one model pulled before using the app.
Your data never leaves your device.
