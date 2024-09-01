const { exec } = require("child_process");
const { ipcMain } = require("electron");

function execScript(ScriptPath) {
    ipcMain.on('run-shell-script', (event, ScriptPath) => {
        exec(ScriptPath, (error, stdout, stderr) => {
            if (error) {
                event.reply('shell-script-response', `ERROR - ${error.message}`);
                return;
            }
            if (stderr) {
                event.reply('shell-script-response', `Message - ${stderr}`);
                return;
            }

            event.reply('shell-script-response', `OUTPUT - ${stdout}`)
        })
    })
}

module.exports = { execScript }