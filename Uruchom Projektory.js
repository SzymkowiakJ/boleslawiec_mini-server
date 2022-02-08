const cmd = require("node-cmd");
cmd.runSync("taskkill /im explorer.exe /f");
setTimeout(()=>{
cmd.run('start "" "C:\\Kiosk\\StartKiosk.lnk');
}, 3000)
