/*--CONSTANTS--*/
const easyPattern = ["green", "yellow", "blue", "red"];
/* const easy1 = ['green'];
const easy2 = ['green', 'yellow'];
const easy3 = ["green", "yellow", "blue"];
const easy4 = ["green", "yellow", "blue", "red"]; */
const eightBit = new Audio("error-8-bit.mp3");
const eightBitTwo = new Audio("error-8-bit-2.mp3");


/*--APP'S STATE VARIABLES--*/

let score = 0;
let userPattern = [];
let turn = 0;
let easyTimer =   [1500, 2500, 3500, 4500, 5500];
let mediumTimer = [1000, 2000, 3000, 4000, 5000];
let hardTimer =   [500, 1500, 2500, 3500, 4500];
let finalTimer = [];

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
let mediumB = document.getElementById("mediumB");
let hardB = document.getElementById("hardB");
let restartB = document.getElementById("restartB");


setInputName.textContent = getInputName;

/*--EVENT LISTENERS--*/

easyB.addEventListener("click", buttonIsClicked);
mediumB.addEventListener("click", buttonIsClicked);
hardB.addEventListener("click", buttonIsClicked);
restartB.addEventListener("click", buttonIsClicked);



function buttonIsClicked(e) {
    easyButtonPattern(e);
    restartButtonPattern(e);
}

function addEventListeners(){
    greenButtonEl.addEventListener("click", buttonIsClicked);
    yellowButtonEl.addEventListener("click", buttonIsClicked);
    blueButtonEl.addEventListener("click", buttonIsClicked);
    redButtonEl.addEventListener("click", buttonIsClicked); 
}



function easyButtonPattern(el){
    if(el.target.id === easyB.id || el.target.id === mediumB.id || el.target.id === hardB.id){
        /* level set up for difficulty */
        switch(el.target.id){
            case easyB.id:
                finalTimer = easyTimer;
                break;
            case mediumB.id:
                finalTimer = mediumTimer;
                break;
            case hardB.id:
                finalTimer = hardTimer;
                break;
        }
        init();
        setTimeout(addGreenBorder, 0);
        setTimeout(removeGreenBorder, 1000);
    }else{
        flashWhenClicked(el);
        function checkPattern(){
            for(let i = 0; i < userPattern.length; i++){
                if(userPattern[i] !== easyPattern[i]){
                    return false;
                }    
            }
            return true;  
        }
        if(checkPattern()){
            if(turn + 1 === userPattern.length){
                turn++;
                score++;
                checkScore();    
                userPattern = [];
                if(!checkEasyWinner()){
                    easyPatterns();
                };
            } 
        }else{
            failMessage();
        } 
    }
}

function restartButtonPattern(el){
    if(el.target.id === restartB.id){
        init();
    }
}

function easyPatterns(){
    for(let i = 0; i <= turn; i++){
        boardMaker(easyPattern[i]);
    }
    /* if(turn === 0){
        for(let easy of easy1){
            boardMaker(easy);
        }
    }
    if(turn === 1) {
        for(let easy of easy2){
            boardMaker(easy);
        }
    }
    if (turn === 2){
        for(let easy of easy3){
            boardMaker(easy);
        }
    }
    if (turn === 3){
        for(let easy of easy4){
            boardMaker(easy);
        }
    }  */  
}

function flashWhenClicked(el){
    if(el.target.id === greenButtonEl.id){
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


function checkEasyWinner(){ 
    if(turn >= easyPattern.length){
        playerMessageEl.textContent = "Player has beaten Simon!";
        return true;
    }
}

function boardMaker(color){
    if(color === "green"){
        setTimeout(addGreenBorder, finalTimer[0]);
        setTimeout(removeGreenBorder, finalTimer[1]);
    }else if(color === "yellow"){
        setTimeout(addYellowBorder, finalTimer[1]);
        setTimeout(removeYellowBorder, finalTimer[2]);
    }else if(color === "blue"){
        setTimeout(addBlueBorder, finalTimer[2]);
        setTimeout(removeBlueBorder, finalTimer[3]);
    }else if(color === "red"){
        setTimeout(addRedBorder, finalTimer[3]);
        setTimeout(removeRedBorder, finalTimer[4]);
    }
}



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

