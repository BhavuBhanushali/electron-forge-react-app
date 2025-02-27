const { app, BrowserWindow, ipcMain, Tray, nativeImage, Menu } = require('electron');
const path = require('node:path');

let mainWindow = null;
let tray = null;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const gotTheLock = app.requestSingleInstanceLock();

const createTray = () => {
  const iconPath = path.join(app.getAppPath(), 'assets', 'icons', 'png', '16x16.png');
  let trayicon = nativeImage.createFromDataURL("data:image/png;base64,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");

  if (trayicon.isEmpty()) {
    console.error("Tray icon not found at:", iconPath);
  }
  trayicon = trayicon.resize({ width: 16 });
  tray = new Tray(trayicon);
  tray.setImage(trayicon);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Show App',
      click: () => {
        showMainWindow();
      },
    },
    {
      label: 'Quit',
      click: () => {
        app.exit();
      },
    },
  ]);

  tray.setToolTip('My Electron App');
  tray.setContextMenu(contextMenu);
  tray.on('click', () => {
    showMainWindow();
  });
};

const showMainWindow = () => {
  if (!mainWindow) {
    createWindow();
  } else {
    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    }
    mainWindow.show();
    mainWindow.focus();
  }
};

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    showMainWindow();
  });

  app.whenReady().then(() => {
    createWindow();
    createTray();

    app.on('activate', () => {
      showMainWindow();
    });
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      // app.quit();
    }
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: true,
    },
    icon: path.join(app.getAppPath(), 'assets', 'icons', 'win', 'icon.ico'),
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();

  mainWindow.on('close', (event) => {
    event.preventDefault();
    mainWindow.hide();
  });

  // mainWindow.on('minimize', (event) => {
  //   // event.preventDefault();
  //   // mainWindow.hide();
  // });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

ipcMain.handle('opendialogBox', async (e, arg) => {
  return true;
});
