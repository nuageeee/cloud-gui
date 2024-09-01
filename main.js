const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('node:path')
const { createWindow } = require("./function/mainWindow");
const { execScript } = require("./function/script/shellScript");

let scriptPath = path.join(__dirname, './script/checkDisk.sh')

app.whenReady().then(() => {
    createWindow()
    execScript(scriptPath)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

ipcMain.on('run-shell-script', (event, arg) => {
    exec(arg, (error, stdout, stderr) => {
        if (error) {
            event.reply('shell-script-response', `Error: ${error.message}`);
            return;
        }
        if (stderr) {
            event.reply('shell-script-response', `Stderr: ${stderr}`);
            return;
        }
        event.reply('shell-script-response', `Output: ${stdout}`);
    });
});