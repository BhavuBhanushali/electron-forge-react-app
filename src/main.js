const { app, BrowserWindow, ipcMain, Tray, nativeImage, Menu } = require('electron');
const path = require('node:path');

let mainWindow = null;
let tray = null;

if (require('electron-squirrel-startup')) {
  app.quit();
}

// Ensure only a single instance of the app runs
const gotTheLock = app.requestSingleInstanceLock();

const createTray = () => {
  const icon = path.join(app.getAppPath(), 'assets', 'icons', 'win', 'icon.ico')
  const trayicon = nativeImage.createFromPath(icon);
  tray = new Tray(trayicon.resize({ width: 16 }));
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        if (mainWindow) {
          if (mainWindow.isMinimized()) mainWindow.restore();
          mainWindow.focus();
        }
      },
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setContextMenu(contextMenu);
};

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(() => {
    createWindow();
    createTray()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true,
    },
    icon: path.join(app.getAppPath(), 'assets', 'icons', 'win', 'icon.ico'),
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();

  ipcMain.handle('opendialogBox', () => true);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
