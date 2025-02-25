const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openDailogBox: () => ipcRenderer.invoke('opendialogBox')
})