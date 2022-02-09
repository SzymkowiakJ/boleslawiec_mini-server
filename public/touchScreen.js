const worker = new SharedWorker('jsworker.js');
const clickArea1 = document.getElementById('click-area-1')
const clickArea2 = document.getElementById('click-area-2')
const clickArea3 = document.getElementById('click-area-3')
const clickArea4 = document.getElementById('click-area-4')
const img1 = document.querySelector('#click-area-1 img')
const img2 = document.querySelector('#click-area-2 img')
const img3 = document.querySelector('#click-area-3 img')
const img4 = document.querySelector('#click-area-4 img')
const langPL = document.getElementById('langPL')
const langENG = document.getElementById('langENG')
const langDE = document.getElementById('langDE')
const interreg = document.getElementById('interreg')
const stopka = document.getElementById('stopka');
const vidStopBtn = document.getElementById('vidStop');
const vidPaPBtn = document.getElementById('vidPaP');
let lang = 'PL';

const changeLangHandler= (newLang) =>{
    const labels = document.querySelectorAll('.img-title');
    if(newLang==='PL'){
        lang = newLang;
        labels[0].innerHTML='Wizyta Napoleona w Bolesławcu';
        // labels[1].innerHTML='Bolesławiec twierdzą Napoleona';
        // labels[2].innerHTML='Koniec drogi Kutuzowa';
        // labels[3].innerHTML='Bolesławiec przeciwko Napoleonowi';
        // labels[4].innerHTML='Wkrótce';
        // labels[5].innerHTML='Wkrótce';
        // labels[6].innerHTML='Wkrótce';
        // labels[7].innerHTML='Wkrótce';
        stopka.src='./public/images/stopkaPL.png'
        interreg.src='./public/images/interregPL.png'
    };
    if(newLang==='ENG'){
        lang = newLang;
        labels[0].innerHTML="Napoleon's visit to Bolesławiec";
        // labels[1].innerHTML="Bolesławiec as Napoleon's fortress";
        // labels[2].innerHTML="The end of Kutuzov's march";
        // labels[3].innerHTML='Bolesławiec against Napoleon';
        // labels[4].innerHTML='Coming soon';
        // labels[5].innerHTML='Coming soon';
        // labels[6].innerHTML='Coming soon';
        // labels[7].innerHTML='Coming soon';
        stopka.src='./public/images/stopkaPL.png'
        interreg.src='./public/images/interregPL.png'
    };
    if(newLang==='DE'){
        lang = newLang;
        labels[0].innerHTML='Napoleone in Bunzlau';
        // labels[1].innerHTML='Bunzlau als Festung Napoleons';
        // labels[2].innerHTML='Kutusow am Ende seines Weges';
        // labels[3].innerHTML='Bunzalu gengen Napoleon';
        // labels[4].innerHTML='Kommt bald';
        // labels[5].innerHTML='Kommt bald';
        // labels[6].innerHTML='Kommt bald';
        // labels[7].innerHTML='Kommt bald';
        stopka.src='./public/images/stopkaDE.png'
        interreg.src='./public/images/interregDE.png'
    };;
}

const removePulsing= ()=>{
    img1.classList.remove('pulsing')
    img4.classList.remove('pulsing')
    img3.classList.remove('pulsing')
    img2.classList.remove('pulsing')
}

worker.port.addEventListener("message", (e)=>{
    console.log(e.data)
    if(e.data.video==='end'){
        removePulsing()
    }
}, false);

worker.port.start();

const area1ClickedHandler=()=>{
    console.log('clickArea1 clicked');
    worker.port.postMessage({play: '01', lang: lang})
    removePulsing()
    img1.classList.add('pulsing');
}
const area2ClickedHandler=()=>{
    console.log('clickArea2 clicked');
    worker.port.postMessage({play: '02', lang: lang})
    removePulsing()
    // img2.classList.add('pulsing');
}

const area3ClickedHandler=()=>{
    console.log('clickArea3 clicked');
    worker.port.postMessage({play: '03', lang: lang})
    removePulsing()
    // img3.classList.add('pulsing');
}
const area4ClickedHandler=()=>{
    console.log('clickArea4 clicked');
    worker.port.postMessage({play: '04', lang: lang})
    removePulsing()
    // img4.classList.add('pulsing');
}


clickArea1.addEventListener('click',area1ClickedHandler);
// clickArea2.addEventListener('click', area2ClickedHandler);
// clickArea3.addEventListener('click', area3ClickedHandler);
// clickArea4.addEventListener('click', area4ClickedHandler);
clickArea1.addEventListener('touchend', area1ClickedHandler);
// clickArea2.addEventListener('touchend', area2ClickedHandler);
// clickArea3.addEventListener('touchend', area3ClickedHandler);
// clickArea4.addEventListener('touchend', area4ClickedHandler);


const PLClickedHandler = () =>{
    changeLangHandler('PL');
}

const ENGClickedHandler = () =>{
    changeLangHandler('ENG');
}
const DEClickedHandler = () =>{
    changeLangHandler('DE');
}
langPL.addEventListener('touchend',PLClickedHandler);
langPL.addEventListener('click',PLClickedHandler);
langENG.addEventListener('touchend',ENGClickedHandler)
langENG.addEventListener('click',ENGClickedHandler)
langDE.addEventListener('touchend',DEClickedHandler)
langDE.addEventListener('click',DEClickedHandler)

const vidStopHandler= () =>{
    removePulsing();
    worker.port.postMessage({stop:true});
}

const vidPaPHandler= () =>{
    // removePulsing();
    worker.port.postMessage({pap:true});
}
vidStopBtn.addEventListener('touchend', vidStopHandler)
// vidStopBtn.addEventListener('click', vidStopHandler)
vidPaPBtn.addEventListener('touchend', vidPaPHandler)
// vidPaPBtn.addEventListener('click', vidPaPHandler)