const { ipcRenderer } = require('electron')
const { contextBridge } = require('electron/renderer')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
},
  'electronAPI', {
  runShellScript: (script) => ipcRenderer.send('run-shell-script', script),
  onShellScriptResponse: (callback) => ipcRenderer.on('shell-script-response', (event, response) => callback(response)),
}
)