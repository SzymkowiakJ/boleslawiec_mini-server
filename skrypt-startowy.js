const cmd = require("node-cmd");
const { exit } = require("process");

cmd.run('start "" "C:\\Kiosk\\mini-server.exe');
cmd.runSync("taskkill /im explorer.exe /f");
// setTimeout(function(){
//     cmd.run('start "" "C:\\Kiosk\\StartKiosk.lnk');
//     setTimeout(function(){

//     process.kill(process.pid, 'SIGTERM')
//     exit()

//     }, 10000)
// 				}, 2000);
cmd.run('start "" "C:\\Kiosk\\StartKiosk.lnk');
const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question(
	`Naciśnij enter aby przywrócić explorer i zamknąć to okno`,
	() => {
		try {
			cmd.runSync("explorer.exe");
			// console.log("Zamykam to okno...");
			// process.kill(process.pid, "SIGTERM");
			exit();
		} catch (error) {
			console.log(error);
		}
		readline.close();
	}
);
