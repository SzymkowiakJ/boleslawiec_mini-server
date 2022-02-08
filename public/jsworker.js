const ports =[]


self.addEventListener('connect', (e)=>{
    let currentPort = e.ports[0];
    // port.addEventListener('message', (e)=>{
    //     port.postMessage(e.data);
    // }, false);
    ports.push(currentPort);
    currentPort.addEventListener('message', (e)=>{
        // port.postMessage(e.data);
        ports.forEach((port)=>port.postMessage(e.data));
    }, false);
    currentPort.start()
}, false);