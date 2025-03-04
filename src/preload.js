const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openDailogBox: () => ipcRenderer.invoke('opendialogBox'),
  login: (payload) => ipcRenderer.invoke('login', payload),
})