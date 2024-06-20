// Navigation Bar 
const nav = document.querySelector('#navBar');

let navOffset = 500;
let navSwitch = true;
setInterval(() => {
    nav.style.backgroundPosition = `${navOffset}px`;
    if(navSwitch) navOffset += 1;
    if(!navSwitch) navOffset -= 1;

    if (navOffset <= 0) navSwitch = true;
    if (navOffset >= 500) navSwitch = false;
    
}, 45);

// Banner
const banner = document.querySelector('.current')
let bannerL = 0;
let bannerA = 4.4;
const bannerInt = setInterval(() =>{
    banner.style.paddingBottom = `${bannerL}px`;
    bannerL += bannerA;
    if(bannerA > 1) bannerA -= 0.2;
    if(bannerL >= 60) clearInterval(bannerInt);
}, 4);


// Moving

const move = document.querySelectorAll('.move');

const moveTop = [0, 0];
const moveLeft = [0, 0];
const moveTopV = [0, 0];
const moveLeftV = [0, 0];

setInterval(() => {
    for(i = 0; i < move.length; i++) {
        moveTop[i] += moveTopV[i];
        moveLeft[i] += moveLeftV[i];

        move[i].style.top = `${moveTop[i]}px`;
        move[i].style.left = `${moveLeft[i]}px`;
        if(moveTop[i] > 40 && moveTopV[i] > 0) moveTopV[i] = -1* moveTopV[i];
        if(moveTop[i] < -50 && moveTopV[i] < 0) moveTopV[i] = -1* moveTopV[i];
        if(moveLeft[i] > 20 && moveLeftV[i] > 0) moveLeftV[i] = -1* moveLeftV[i];
        if(moveLeft[i] < -20 && moveLeftV[i] < 0) moveLeftV[i] = -1* moveLeftV[i];    
    }

}, 30);

if(typeof move[0] != 'undefined'){
    move[0].addEventListener('mouseover', () => {
        moveTopV[0] = 0.8;
        moveLeftV[0] = 0.75;
    });

    move[0].addEventListener('mouseout', () => {
        moveTopV[0] = 0;
        moveLeftV[0] = 0;
    })
}

if(typeof move[1] != 'undefined'){
    move[1].addEventListener('mouseover', () => {
        moveTopV[1] = 0.8;
        moveLeftV[1] = 0.75;
    });

    move[1].addEventListener('mouseout', () => {
        moveTopV[1] = 0;
        moveLeftV[1] = 0;
    })
}

const hover = document.querySelectorAll(".hover");

