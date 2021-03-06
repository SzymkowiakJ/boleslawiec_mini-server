const worker = new SharedWorker("jsworker.js");
const iframe = document.getElementById("iframe");

iframe.muted = true;
let placeholder =true
let paused = false

iframe.addEventListener("ended", () => {
	console.log("video ended");
	iframe.muted = true;
	iframe.loop = true;
	iframe.src = "./public/video/Placeholder_Ekran.mp4";
	placeholder= true;
	paused = false
	worker.port.postMessage({ video: "end" });
});

worker.port.addEventListener(
	"message",
	(e) => {
		console.log("got msg:", e.data);
		if (e.data.play && e.data.lang) {
			iframe.muted = false;
			iframe.loop = false;
			iframe.currentTime = 0;
			iframe.src = `./public/video/${e.data.lang}/Film_${e.data.play}_${e.data.lang}_Ekran.mp4`;
			placeholder = false;
		}
		if (e.data.stop) {
			if(!placeholder){
			iframe.muted = true;
			iframe.loop = true;
			iframe.src = "./public/video/Placeholder_Ekran.mp4";
			placeholder = true;
			paused = false
			worker.port.postMessage({ video: "end" });
			}
		}
		if(e.data.pap){
			if(!placeholder){
				if(paused){
					iframe.play();
					paused = false
				}else{
					iframe.pause();
					paused = true;
				}
			}
		}
	},
	false
);

worker.port.start();
