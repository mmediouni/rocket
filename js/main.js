'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
const billbord = document.querySelector('#billboard span');
const rocket = document.querySelector('#rocket');
const moon = document.querySelector('#moon');
const explosion = document.querySelector('#launching-fire');
const firingButton = document.querySelector('#firing-button');
const cancelButton = document.querySelector('#cancel-button');
const resetButton = document.querySelector('#reset-button');
const bomb = document.getElementById('myAudio');
const IMAGE_PATH = 'images/moon' ;
const IMAGE_fireWorksPATH = 'images/fireworks' ;

const GIF_EXT = '.gif' ;
var theMoonNume;
var thefireWorksNum ;
let timer ;
var n = 10;
const milliSECONDE = 100;
let fly;
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function onClickFiringButton() {
    // 1 - desactiver le bouton
    firingButton.classList='disabled';
    cancelButton.classList.remove('disabled');
    firingButton.removeEventListener('click', onClickFiringButton);
    // 2 - Changer l'image rocket
    rocket.src='images/rocket2.gif';
    // 3 - Programmer le decollage
    fly = window.setTimeout(function(){
        rocket.src='images/rocket3.gif';
        rocket.classList= 'tookOff';
        explosion.classList.remove('launching-fire-display')
          playAudio();
        theMoonNume = getRandomInteger(1,5)
        moon.src=IMAGE_PATH+theMoonNume+GIF_EXT;
        moon.classList= 'tookOff';

        for (let i = 0; i < 20; i++) {
            fireworks();
        }


},n * milliSECONDE);
    
// 4 - Commencer le compte a rebours
    countdown()
    timer = window.setInterval(countdown,milliSECONDE);
    
}

function countdown() {
    

    if (n < 0) {
        window.clearInterval(timer) ;
        rocket.id='rocket';
        cancelButton.classList='disabled';
        
    }
    else{
        billbord.textContent = n; 
        n--;
    }
    
}

function onClickCancelButton() {
    window.clearInterval(timer);
    window.clearTimeout(fly);
    cancelButton.classList='disabled'
    firingButton.classList.remove('disabled');
    firingButton.addEventListener('click', onClickFiringButton);



}
function onClickResetlButton() {
    n=10;
    countdown()
    window.clearTimeout(fly);
    resetButton.setAttribute("id", "reset-buttonDown");
    // cancelButton.id='reset-buttonDown'
    setTimeout(function(){ 
        resetButton.setAttribute("id", "reset-button");    ; 
    }, 300);
    window.location.reload();
}

function addStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    var taillesDesEtoiles = ['tiny', 'normal', 'big'];
    star.classList.add( taillesDesEtoiles[getRandomInteger(0,taillesDesEtoiles.length-1)]);
    console.log(taillesDesEtoiles);
    // Personaliser l"etoile
    star.style.left = getRandomInteger(1,100) + '%' ;
    star.style.top = getRandomInteger(1,100) + '%' ;
    document.querySelector('body').appendChild(star);
}


for (let i = 0; i < 150; i++) {
    addStar();  
}

function playAudio() { 
    bomb.play(); 
  } 

function fireworks() {

    const firework = document.createElement('img');
    firework.classList.add('firework');
    thefireWorksNum = getRandomInteger(1,3)
    firework.setAttribute("src", IMAGE_fireWorksPATH+thefireWorksNum+GIF_EXT)
    var emplacementFireworks = ['fireworksDimension1','fireworksDimension2','fireworksDimension3'];
    firework.classList.add( emplacementFireworks[getRandomInteger(0,emplacementFireworks.length-1)]);
    firework.style.left = getRandomInteger(20,80) + '%' ;
    firework.style.top = getRandomInteger(1,50) + '%' ;
    document.querySelector('body').appendChild(firework);


}


function createRain() {
    const drops = document.createElement("div");
    drops.classList.add("drop");

    drops.style.left = Math.random() * 100 + "vw";
    drops.style.animationDuration = Math.random() * 2 + 3 + "s";

    drops.innerText = "❅";

    document.body.appendChild(drops);

    setTimeout(() => {
        drops.remove();
    }, 3000);
}

setInterval(createRain, 44);



/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

firingButton.addEventListener('click', onClickFiringButton);
cancelButton.addEventListener('click', onClickCancelButton);
resetButton.addEventListener('click', onClickResetlButton);
