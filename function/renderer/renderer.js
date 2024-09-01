const path = require("path");

const disk_available = document.getElementById('button_disk')
disk_available.addEventListener('click', () => {
    const scriptPath = path.join(__dirname, '/script/checkDisk.sh')
    window.electronAPI.runShellScript(scriptPath);
})

window.electronAPI.onShellScriptResponse((response) => {
    document.getElementById('info').innerText = response;
})