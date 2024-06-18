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
const bannerInt = setInterval(() =>{
    banner.style.paddingBottom = `${bannerL}px`;
    bannerL += 1;
    if(bannerL == 60) clearInterval(bannerInt);
}, 5);