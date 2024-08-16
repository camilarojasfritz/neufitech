import { app, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const appServe = app.isPackaged ? serve({
    directory: join(__dirname, '../out')
}) : null;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            preload: join(__dirname, 'preload.js')
        }
    });
    win.maximize()
    win.removeMenu()
    // win.fullScreen = true 
    if (app.isPackaged) {
        appServe(win).then(() => {
            win.loadURL('app://-');
        });
    } else {
        win.loadURL('http://localhost:3000');
        win.webContents.openDevTools();
        win.webContents.on('did-fail-load', (e, code, desc) => {
            win.webContents.reloadIgnoringCache();
        });
    }
}

app.on('ready', () => {
    createWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
