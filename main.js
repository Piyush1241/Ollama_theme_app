const { app, BrowserWindow, shell } = require('electron')
const path = require('path')
const { spawn, execSync } = require('child_process')

let mainWindow
let ollamaProcess = null

function isOllamaRunning() {
  try {
    execSync('pgrep -x ollama', { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

function startOllama() {
  if (isOllamaRunning()) return

  // Try common install locations
  const candidates = [
    '/usr/local/bin/ollama',
    '/opt/homebrew/bin/ollama',
    '/usr/bin/ollama',
    'ollama',  // fallback: rely on PATH
  ]

  let bin = null
  for (const c of candidates) {
    try { execSync(`test -x ${c}`, { stdio: 'ignore' }); bin = c; break } catch {}
  }

  if (!bin) {
    console.warn('Ollama binary not found — skipping auto-start')
    return
  }

  ollamaProcess = spawn(bin, ['serve'], {
    detached: false,
    stdio: 'ignore',
  })

  ollamaProcess.on('error', err => {
    console.error('Failed to start Ollama:', err)
  })

  console.log('Ollama started with PID', ollamaProcess.pid)
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: 'hiddenInset',
    vibrancy: 'under-window',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    icon: path.join(__dirname, 'icon.png'),
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })
}

app.whenReady().then(() => {
  startOllama()

  // Give Ollama a moment to bind its port before the UI tries to connect
  setTimeout(createWindow, 800)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  // Quit Ollama only if we started it (don't kill a user-started instance)
  if (ollamaProcess) {
    ollamaProcess.kill()
    ollamaProcess = null
  }
  if (process.platform !== 'darwin') app.quit()
})