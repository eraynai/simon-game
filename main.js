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
let easyB = document.getElementById("easyB");


setInputName.textContent = getInputName;

/*--EVENT LISTENERS--*/

/* startEl.addEventListener("click", buttonIsClicked); */
easyB.addEventListener("click", buttonIsClicked);



function buttonIsClicked(e) {
    if(e.target.id === easyB.id){
        console.log("are you running?");
        init();
        setTimeout(addGreenBorder, 0);
        setTimeout(removeGreenBorder, 1000);
    }else{
        flashWhenClicked(e);
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

function flashWhenClicked(el){
    if(el.target.id === greenButtonEl.id){
        console.log('is flash when clicked working?');
        setTimeout(addGreenBorder, 0);
        setTimeout(removeGreenBorder, 1000);
        userPattern.push(el.target.id);
    }else if(el.target.id === yellowButtonEl.id){
        setTimeout(addYellowBorder, 0);
        setTimeout(removeYellowBorder, 1000);
        userPattern.push(el.target.id);
    }else if(el.target.id === blueButtonEl.id){
        setTimeout(addBlueBorder, 0);
        setTimeout(removeBlueBorder, 1000);
        userPattern.push(el.target.id);
    }else if(el.target.id === redButtonEl.id){
        setTimeout(addRedBorder, 0);
        setTimeout(removeRedBorder, 1000);
        userPattern.push(el.target.id);
    }
}

function easyButtonPattern(){

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
        setTimeout(addGreenBorder, 1500);
        setTimeout(removeGreenBorder, 2500);
    }else if(color === "yellow"){
        setTimeout(addYellowBorder, 2500);
        setTimeout(removeYellowBorder, 3500);
    }else if(color === "blue"){
        setTimeout(addBlueBorder, 3500);
        setTimeout(removeBlueBorder, 4500);
    }else if(color === "red"){
        setTimeout(addRedBorder, 4500);
        setTimeout(removeRedBorder, 5500);
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
    score = 0;
}

