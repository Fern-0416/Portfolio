const nav = document.querySelector('#navBar');

let navOffset = 0;
let navSwitch = true;
setInterval(() => {
    nav.style.backgroundPosition = `${navOffset}px`;
    if(navSwitch) navOffset += 1;
    if(!navSwitch) navOffset -= 1;

    if (navOffset <= 0) navSwitch = true;
    if (navOffset >= 500) navSwitch = false;
    
}, 45);

const banner = document.querySelector('.current')
let bannerL = 0;
let bannerA = 3;
const bannerInt = setInterval(() =>{
    banner.style.paddingBottom = `${bannerL}px`;
    bannerL += bannerA;
    if(bannerA > 1) bannerA -= 0.1;
    if(bannerL >= 60) clearInterval(bannerInt);
}, 4);