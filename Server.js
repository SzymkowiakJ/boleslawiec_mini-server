const cmd = require("node-cmd");
const express = require("express");

app = express();
app.use(express.static("public"));
cmd.runSync("taskkill /im explorer.exe /f");


const server = app.listen(3000, () => {
	console.log(`Server pracuje na porcie ${JSON.stringify(server.address().port)}`);
});

