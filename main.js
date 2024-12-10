// Navigation Bar 
const nav = document.querySelector('#navBar');

let navOffset = Math.random()*500;
let navSwitch = Math.random() > 0.5;
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
        if(moveTop[i] > 30 && moveTopV[i] > 0) moveTopV[i] = -1* moveTopV[i];
        if(moveTop[i] < -40 && moveTopV[i] < 0) moveTopV[i] = -1* moveTopV[i];
        if(moveLeft[i] > 20 && moveLeftV[i] > 0) moveLeftV[i] = -1* moveLeftV[i];
        if(moveLeft[i] < -20 && moveLeftV[i] < 0) moveLeftV[i] = -1* moveLeftV[i];    
    }

}, 30);


if(typeof move[0] != 'undefined'){
    move[0].addEventListener('mouseover', () => {
        if(Math.random() > 0.5) moveTopV[0] = 0.8;
        else moveTopV[0] = -0.8;
        if(Math.random() > 0.5) moveLeftV[0] = 0.75;
        else moveLeftV[0] = -0.75;        
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

         if(typeof hover[i] != 'undefined') hover[i].style.top = `${hoverP[i]}px`;
        
        if(hoverP[i] > 40 || hoverV[i] > 3) hoverA[i] = -0.2;
        if(hoverP[i] < 0 || hoverV[i] < -3) hoverA[i] = 0.2;
    }
}, 40);

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

// DROPDOWN

const dropI = document.querySelector(".drop img");
const dropP = document.querySelector(".drop div")
let dropped = false;
let heightD = 4;
let heightA = 2.5;

if(dropI != null) {

    dropI.addEventListener('mousedown', () => {
        heightA = 2;
        dropped = !dropped;
    });
}

setInterval(() => {
    if(dropP != null) {
        if(dropped) {
            dropP.style.display = "inherit";
            dropI.style.transform = "scaleY(-1)";

            if(heightD < 40) {
                heightD += heightA;
                if(heightA > 0.3) heightA -= 0.08;
                document.querySelector("#projectsS").style.maxHeight = `${heightD}em`;
            }    
            else document.querySelector("#projectsS").style.maxHeight = "auto";
        }
        else {
            if(heightD <= 5) dropP.style.display = "none";
            else {
                heightD -= heightA;
                if(heightA > 0.5) heightA -= 0.085;
                document.querySelector("#projectsS").style.maxHeight = `${heightD}em`;
            }
            dropI.style.transform = "scaleY(1)";
        }
    }
}, 20);


// PROJECTS REVEAL

const projectsD = document.querySelectorAll(".projectsD");
const hide = new Array(projectsD.length);

let opacityBody = 0;
let opacityBodyB = false;
let opacityBox = new Array(projectsD.length);

for(let i = 0; i < hide.length; i++) {
    hide[i] = false;
    opacityBox[i] = 0;
    projectsD[i].addEventListener('click', () => {
        for(let j = 0; j < hide.length; j++) { if(j != i) hide[j] = false;}
        hide[i] = !hide[i];
    });
    document.querySelectorAll("#imgX")[i].addEventListener('click', ()=> {
        hide[i] = false;
    })
}

setInterval(() => {
    for(let i = 0; i < hide.length; i++) {
        if(hide[i]) {
            document.querySelectorAll(".hidden")[i].style.display = "block";
            if(opacityBox[i] < 1) opacityBox[i] += 0.1;
            opacityBodyB = true;
        }
        else {
            if(opacityBox[i] > 0) opacityBox[i] -= 0.1;
            else document.querySelectorAll(".hidden")[i].style.display = "none";
        }
        document.querySelectorAll(".hidden")[i].style.opacity = `${opacityBox[i]}`;
    }   

    if(document.querySelector("#cover") != null) document.querySelector("#cover").style.opacity = `${opacityBody}`;
    if(opacityBodyB) {
        if(opacityBody < 0.4) opacityBody += 0.05;
    }
    else if(opacityBody > 0) opacityBody -= 0.1
    opacityBodyB = false;
}, 30);


// Bounce

const bouncing = document.querySelector(".bounce");
let bounceT = 0;
let bounceC = 0;
let bounceY = 0;
// let bounceA = 1.5;
let bounceU = true;

setInterval(() => {
    bounceT++;
    if(bounceC < 2) {
        if(bounceU) {
            bounceY-= 1;
            // bounceY-= bounceA;
            // if(bounceA > 0.2) bounceA -= 0.13;
            if(bounceY <= -8) {
                bounceU = false;
                // bounceA = 1.5;
            }
        }
        else {
            bounceY+= 1;
            // bounceY+= bounceA;
            // if(bounceA > 0.3) bounceA-= 0.13;
            if(bounceY >= 0) {
                bounceU = true;
                bounceC++;
                // bounceA = 1.5;
            }
        }
        bouncing.style.top = `${bounceY}px`
    }
    if(bounceT >= 125) {
        bounceT = 0;
        bounceC = 0;
    }
}, 20)