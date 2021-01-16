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
const GIF_EXT = '.gif' ;
var theMoonNume ;
let timer ;
var n = 10;
const milliSECONDE = 150;
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
        function playAudio() { 
            bomb.play(); 
          } 
          playAudio();
        theMoonNume = getRandomInteger(1,5)
        moon.src=IMAGE_PATH+theMoonNume+GIF_EXT;
        moon.classList= 'tookOff';

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


for (let i = 0; i < 200; i++) {
    addStar();  
}
/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

firingButton.addEventListener('click', onClickFiringButton);
cancelButton.addEventListener('click', onClickCancelButton);
resetButton.addEventListener('click', onClickResetlButton);
