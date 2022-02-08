const worker = new SharedWorker('jsworker.js');
const iframe = document.getElementById('iframe')

iframe.muted = true;


iframe.addEventListener('ended', ()=>{
    console.log('video ended')
    iframe.muted=true;
    iframe.src='./public/video/Placeholder_Makieta.mp4'
    worker.port.postMessage({video: 'end'})

})

worker.port.addEventListener("message", (e)=>{
    console.log('got msg:', e.data)
    
    if(e.data.play && e.data.lang){
        iframe.muted=false;
        iframe.src=`./public/video/Film_${e.data.play}_${e.data.lang}_Makieta.mp4`
    }
}, false);

worker.port.start();



