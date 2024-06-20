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


// MOVE

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


//HOVER

const hover = document.querySelectorAll(".hover");

const hoverP = [0,0];
const hoverV = [0,0];
const hoverA = [-1,-1];
const hovering = [false, false];

setInterval(()=> {
    for(i = 0; i < 2; i++) {
        hoverP[i] += hoverV[i];

        // if(hovering[i]) hoverV[i] += hoverA[i]; //1

         hoverV[i] += hoverA[i]; //2
         if(!hovering[i]) hoverA[i] = -0.2*hoverV[i]; //2

        hover[i].style.top = `${hoverP[i]}px`;
        
        if(hoverP[i] > 40 || hoverV[i] > 3) hoverA[i] = -0.3;
        if(hoverP[i] < 0 || hoverV[i] < -3) hoverA[i] = 0.3;
    }
}, 30);

if(typeof hover[0] != 'undefined') {
    hover[0].addEventListener('mouseenter', () => {
        hovering[0] = true;
        hoverA[0] = -0.3; //2
    });

    hover[0].addEventListener('mouseleave', () => {
        hovering[0] = false;
        // hoverV[0] = 0; //1
    })
}

if(typeof hover[1] != 'undefined') {
    hover[1].addEventListener('mouseenter', () => {
        hovering[1] = true;
        hoverA[1] = -0.3;
    });

    hover[1].addEventListener('mouseleave', () => {
        hovering[1] = false;
        // hoverV[1] = 0;
    })
}