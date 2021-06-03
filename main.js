/*--CONSTANTS--*/
const easyPattern = ["green", "green", "yellow", "green", "yellow", "blue", "green", "yellow", "blue", "red"];
const easy1 = ['green'];
const easy2 = ['green', 'yellow'];
const easy3 = ["green", "yellow", "blue"];
const easy4 = ["green", "yellow", "blue", "red"];
const eightBit = new Audio("error-8-bit.mp3");
const eightBitTwo = new Audio("error-8-bit-2.mp3");

/*--APP'S STATE VARIABLES--*/

let score = 0;
let userPattern = [];
let turn = 0;

/*--CACHED ELEMENT REFERENCES--*/

let scoreEl = document.getElementById("score-number");
let startEl = document.getElementById("start");
let greenButtonEl = document.getElementById("green");
let yellowButtonEl = document.getElementById("yellow");
let blueButtonEl = document.getElementById("blue");
let redButtonEl = document.getElementById("red");
let playerMessageEl = document.getElementById("playerMessage");
let setInputName = document.getElementById("setInputName");
let getInputName = localStorage.getItem("player");
setInputName.textContent = getInputName;

/*--EVENT LISTENERS--*/

startEl.addEventListener("click", buttonIsClicked);

function buttonIsClicked(e) {
    if(e.target.id === startEl.id){
        init();
        easyPatterns();
    }else{
        userPattern.push(e.target.id);
        function checkPattern(){
            for(let i = 0; i < userPattern.length; i++){
                if(userPattern[i] !== easyPattern[i]){
                return false;
                }    
            }
            return true;  
        }
        if(checkPattern()){
            turn++;
            score++;
            checkScore();
            easyPatterns();
            checkEasyWinner();
        }else{
            failMessage();
        } 
    }
}

function addEventListeners(){
    greenButtonEl.addEventListener("click", buttonIsClicked);
    yellowButtonEl.addEventListener("click", buttonIsClicked);
    blueButtonEl.addEventListener("click", buttonIsClicked);
    redButtonEl.addEventListener("click", buttonIsClicked); 
}


function easyPatterns(){
    if(turn === 0){
        for(let easy of easy1){
            boardMaker(easy);
        }
    }
    if(turn === 1) {
        for(let easy of easy2){
            boardMaker(easy);
        }
    }
    if (turn === 3){
        for(let easy of easy3){
            boardMaker(easy);
        }
    }
    if (turn === 6){
        for(let easy of easy4){
            boardMaker(easy);
        }
    }   
}



function checkEasyWinner(){ 
    if(turn >= easyPattern.length){
        playerMessageEl.textContent = "Player has beaten Simon!";
    }
}


function boardMaker(color){
    if(color === "green"){
        setTimeout(addGreenBorder, 0);
        setTimeout(removeGreenBorder, 1000);
    }else if(color === "yellow"){
        setTimeout(addYellowBorder, 1000);
        setTimeout(removeYellowBorder, 2000);
    }else if(color === "blue"){
        setTimeout(addBlueBorder, 2000);
        setTimeout(removeBlueBorder, 3000);
    }else if(color === "red"){
        setTimeout(addRedBorder, 3000);
        setTimeout(removeRedBorder, 4000);
    }
}

/* function render(){
    checkEasyWinner();
   
}

setInterval(render, 300); */


function addGreenBorder(){
    greenButtonEl.classList.add("green-ani");
    eightBit.play();
}

function addYellowBorder(){
    yellowButtonEl.classList.add("yellow-ani");
    eightBitTwo.play();
}

function addBlueBorder(){
    blueButtonEl.classList.add("blue-ani");
}

function addRedBorder(){
    redButtonEl.classList.add("red-ani");
}

 function removeGreenBorder(){
    greenButtonEl.classList.remove("green-ani");
}

function removeYellowBorder(){
    yellowButtonEl.classList.remove("yellow-ani");
}

function removeBlueBorder(){
    blueButtonEl.classList.remove("blue-ani");
}

function removeRedBorder(){
    redButtonEl.classList.remove("red-ani");
}

function failMessage(){
    playerMessageEl.textContent = "You failed, do you want to try again?";
}

function checkScore(){
    scoreEl.innerHTML = score;
}

function init(){
    userPattern = [];
    turn = 0;
    setTimeout(addEventListeners, 100);
    playerMessageEl.textContent = "";
    scoreEl.textContent = "0";
}

