const cmd = require("node-cmd");
const express = require("express");
const { exit } = require("process");

app = express();
app.use(express.static("public"));

cmd.run('start "" "C:\\Kiosk\\StartKiosk.lnk');

const server = app.listen(3000, () => {
	console.log(
		`Server pracuje na porcie ${JSON.stringify(server.address().port)}`
	);
});

const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});

setTimeout(() => {
	console.log("");
	console.log("");
	console.log("");

	readline.question(`Naciśnij Enter aby wyłączyć projektory`, () => {
		try {
			cmd.runSync("TASKKILL /IM chrome.exe /F");
			cmd.runSync('start "" "C:\\Kiosk\\focus-change.bat');
			;
			console.log("Zamykam to okno...");
			setTimeout(() => {
				exit();
			}, 2000);
		} catch (error) {
			console.log(error);
		}
		readline.close();
	});
}, 5000);
