/*--CONSTANTS--*/

const gamePattern = ["green", "green", "yellow", "green", "yellow", "blue", "green", "yellow", "blue", "red"];


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
let playerMessageEl = document.getElementById('playerMessage');

/*--EVENT LISTENERS--*/

startEl.addEventListener("click", buttonIsClicked);
greenButtonEl.addEventListener("click", buttonIsClicked);
yellowButtonEl.addEventListener("click", buttonIsClicked);

/*--FUNCTIONS--*/

function buttonIsClicked(e) {
    if(e.target.id === startEl.id){
        console.log("are you starting");
        patternDriver();
    }else{
        userPattern.push(e.target.id);
        console.log(userPattern);
        function checkPattern(){
            for(let i = 0; i < userPattern.length; i++){
                if(userPattern[i] !== gamePattern[i]){
                console.log('are you failing here?');
                return false;
                }    
            }
            return true;  
        }
        if(checkPattern()){
            turn++;
            console.log(turn);
            patternDriver();
           
        }else{
            failMessage();
            resetGame();
        } 
    }
}      

function patternDriver(){
    if(turn === 0){
        addGreenBorder();
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
    if(turn >= gamePattern.length){
        playerMessageEl.textContent = "Player has beaten Simon!";
    }
}

/* function patternDriver(){
    for(let color of gamePattern){
        if(color === "green"){
            setTimeout(addGreenBorder, 300);
            setTimeout(removeGreenBorder, 600);
        }else if(color === "yellow"){
            setTimeout(addYellowBorder, 500);
            setTimeout(removeYellowBorder, 900);
        }else if(color === "blue"){
            setTimeout(addBlueBorder, 800);
            setTimeout(removeBlueBorder, 1200);
        }else if(color === "red"){
            setTimeout(addRedBorder, 1100);
            setTimeout(removeRedBorder, 1500);
        }
    }
} */

function lightFirstPattern(){
    /* setInterval(addGreenBorder, 300); */
    setTimeout(removeGreenBorder, 2000);
    
}

function lightSecondPattern(){
    setTimeout(addGreenBorder, 1000);
    setTimeout(removeGreenBorder, 2600);
    setTimeout(addYellowBorder, 1700);
    setTimeout(removeYellowBorder, 3300);
}

function lightThirdPattern(){
    setTimeout(addGreenBorder, 2400);
    setTimeout(removeGreenBorder, 3000);
    setTimeout(addYellowBorder, 3100);
    setTimeout(removeYellowBorder, 3700);
    setTimeout(addBlueBorder, 3800);
    setTimeout(removeBlueBorder, 4400);
}




function render(){
    checkWinner(); 
}

setInterval(render, 300);


function addGreenBorder(){
    greenButtonEl.classList.add("green-ani");
}

function addYellowBorder(){
    yellowButtonEl.classList.add("yellow-ani");
}

function addBlueBorder(){
    blueButtonEl.classList.add("addBlueBorder");
}

function addRedBorder(){
    redButtonEl.classList.add("addRedBorder");
}

 function removeGreenBorder(){
    greenButtonEl.classList.remove("green-ani");
}

function removeYellowBorder(){
    yellowButtonEl.classList.remove("yellow-ani");
}

function removeBlueBorder(){
    blueButtonEl.classList.remove("addBlueBorder");
}

function removeRedBorder(){
    redButtonEl.classList.remove("addRedBorder");
}

function failMessage(){
    console.log('user has failed, try again');
}

function resetGame(){
    console.log('reset game');
}