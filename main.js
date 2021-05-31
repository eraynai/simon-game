/*--CONSTANTS--*/

const gamePatternOne = ["green", "green", "yellow", "green", "yellow", "green"];


/*--APP'S STATE VARIABLES--*/

let score = 0;

let userPattern = [];
let turn = 0;


/*--CACHED ELEMENT REFERENCES--*/

let scoreEl = document.getElementById("score-number");
let startEl = document.getElementById("start");
let greenButtonEl = document.getElementById("green");
let yellowButtonEl = document.getElementById("yellow");
let playerMessageEl = document.getElementById('playerMessage');

/*--EVENT LISTENERS--*/

startEl.addEventListener("click", buttonIsClicked);
greenButtonEl.addEventListener("click", buttonIsClicked);
yellowButtonEl.addEventListener("click", buttonIsClicked);

/*--FUNCTIONS--*/

function buttonIsClicked(e) {
    if(e.target.id === startEl.id){
        patternDriver();
    }else{
        userPattern.push(e.target.id);
        function checkPattern(){
            for(let i = 0; i < userPattern.length; i++){
                if(userPattern[i] !== gamePatternOne[i]){
                console.log("this is false");
                return false;
                }    
            }
            return true;  
        }
        if(checkPattern()){
            turn++;
            patternDriver();
            checkWinner(); 
        }else{
            failMessage();
            resetGame();
    
        } 
    }
}      

function patternDriver(){
    if(turn === 0){
        return lightFirstPattern();
    }
    if(turn === 1) {
        return lightSecondPattern();
    }
    if (turn === 3){
     return lightThirdPattern();
    }   
}

function checkWinner(){ 
    if(turn >= gamePatternOne.length){
        console.log('player has won!');
    }
}

function lightFirstPattern(){
    setTimeout(addGreenBorder, 300);
    setTimeout(removeGreenBorder, 900);
    
}

function lightSecondPattern(){
    setTimeout(addGreenBorder, 1000);
    setTimeout(removeGreenBorder, 1600);
    setTimeout(addYellowBorder, 1700);
    setTimeout(removeYellowBorder, 2300);
}

function lightThirdPattern(){
    setTimeout(addGreenBorder, 2400);
    setTimeout(removeGreenBorder, 3000);
    setTimeout(addYellowBorder, 3100);
    setTimeout(removeYellowBorder, 3700);
    setTimeout(addGreenBorder, 3800);
    setTimeout(removeGreenBorder, 4400);
}


function render(){
    
}

setInterval(render, 300);


function addGreenBorder(){
    greenButtonEl.classList.add("addGreenBorder");
}

function addYellowBorder(){
    yellowButtonEl.classList.add("addYellowBorder");
}

 function removeGreenBorder(){
    greenButtonEl.classList.remove("addGreenBorder");
}

function removeYellowBorder(){
    yellowButtonEl.classList.remove("addYellowBorder");
}

function failMessage(){
    console.log('user has failed, try again');
}

function resetGame(){
    console.log('reset game');
}