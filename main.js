/*--CONSTANTS--*/
const gameLights = ["green", "yellow", "red", "blue"];
const gamePattern = ["green", "green", "yellow", "green", "yellow", "blue", "green", "yellow", "blue", "red"];
const eightBit = new Audio("error-8-bit.mp3");
const eightBitTwo = new Audio("error-8-bit-2.mp3");

/*--APP'S STATE VARIABLES--*/

let score = 0;
let userPattern = [];
let turn = 0;
let check;


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


/*--FUNCTIONS--*/




function buttonIsClicked(e) {
    if(e.target.id === startEl.id){
        init(); 
        patternDriver();
    }else{
        userPattern.push(e.target.id);
        function checkPattern(){
            for(let i = 0; i < userPattern.length; i++){
                if(userPattern[i] !== gamePattern[i]){
                return false;
                }    
            }
            return true;  
        }
        if(checkPattern()){
            turn++;
            score++;
            checkScore();
            patternDriver();
        }else{
            /* failMessage(); */
        } 
    }
} 

function addEventListeners(){
    greenButtonEl.addEventListener("click", buttonIsClicked);
    yellowButtonEl.addEventListener("click", buttonIsClicked);
    blueButtonEl.addEventListener("click", buttonIsClicked);
    redButtonEl.addEventListener("click", buttonIsClicked); 
}

/* 
function patternDriver(){
    if(turn === 0){
        lightFirstPattern(); 
    }
    if(turn === 1) {
        lightSecondPattern();
    }
    if (turn === 3){
        lightThirdPattern();
    }
    if (turn === 6){
        lightFourthPattern();
    }   
} */



function checkWinner(){ 
    if(turn >= gamePattern.length){
        playerMessageEl.textContent = "Player has beaten Simon!";
    }
}

function patternDriver(){
    for(let pattern of gamePattern){
        boardMaker(pattern);
    }
}

function boardMaker(color){
    for(let light of gameLights){
        if(light === "green"){
            setTimeout(addGreenBorder, 0);
            setTimeout(removeGreenBorder, 1000);
        }else if(light === "yellow"){
            setTimeout(addYellowBorder, 1000);
            setTimeout(removeYellowBorder, 2000);
        }else if(light === "blue"){
            setTimeout(addBlueBorder, 2000);
            setTimeout(removeBlueBorder, 3000);
        }else if(light === "red"){
            setTimeout(addRedBorder, 3000);
            setTimeout(removeRedBorder, 4000);
        }
    }
}


/* function lightFirstPattern(){
    setTimeout(addGreenBorder, 0)
    setTimeout(removeGreenBorder, 1000);
    
}

function lightSecondPattern(){
    setTimeout(addGreenBorder, 0);
    setTimeout(removeGreenBorder, 1000);
    setTimeout(addYellowBorder, 1000);
    setTimeout(removeYellowBorder, 2000);
}

function lightThirdPattern(){
    setTimeout(addGreenBorder, 0);
    setTimeout(removeGreenBorder, 1000);
    setTimeout(addYellowBorder, 1000);
    setTimeout(removeYellowBorder, 2000);
    setTimeout(addBlueBorder, 2000);
    setTimeout(removeBlueBorder, 3000);
}

function lightFourthPattern(){
    setTimeout(addGreenBorder, 0);
    setTimeout(removeGreenBorder, 1000);
    setTimeout(addYellowBorder, 1000);
    setTimeout(removeYellowBorder, 2000);
    setTimeout(addBlueBorder, 2000);
    setTimeout(removeBlueBorder, 3000);
    setTimeout(addRedBorder, 3000);
    setTimeout(removeRedBorder, 4000);

} */

function render(){
    checkWinner();
   
}

setInterval(render, 300);


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

