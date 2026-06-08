# Ollama AI Chat App

A local AI chat interface with an Iron Man HUD theme, built with Electron + Ollama.

## Features
- 🤖 Chat with any local Ollama model
- 🖼️ Image attachment support (works with llava-phi3, moondream, llava)
- ⏹️ Stop generation mid-response
- 🔴 Unload models from memory
- 💾 Chat history saved locally
- 🎨 Iron Man HUD theme (Orbitron font, cyan/dark UI)

## Requirements
- [Ollama](https://ollama.com/download) installed and running
- Node.js

## Setup
```bash
npm install
```

## Run in development
```bash
npx electron .
```

## Build for Mac (Apple Silicon)
```bash
npx electron-packager . "Ollama AI" --platform=darwin --arch=arm64 --overwrite --icon=icon.icns
```

## Recommended models
- `ollama pull llama3` — general chat
- `ollama pull llava-phi3` — image understanding
- `ollama pull moondream` — lightweight image model
