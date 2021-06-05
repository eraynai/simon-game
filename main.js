/*--CONSTANTS--*/
/* const pattern = ["green", "yellow", "blue", "red"];
const pattern2 = ["green", "yellow", "blue", "red", "orange"];
const getItemOne = new Audio("get-item-1-8-bit.mp3");
const getItemTwo = new Audio("get-item-2-8-bit.mp3");
const getItemThree = new Audio("get-item-3-8-bit.mp3");
const getItemFour = new Audio("get-item-4-8-bit.mp3");
const errorSound = new Audio("error-8-bit-2.mp3");
const winSound = new Audio("jump-spring-8-bit.mp3"); */


/*--APP'S STATE VARIABLES--*/

/* let score = 0;
let generatedSequence = [];
let userPattern = [];
let turn = 0;
let easyTimer =   [2000, 3000, 4000, 5000, 6000];
let mediumTimer = [1000, 2000, 3000, 4000, 5000];
let hardTimer =   [500, 1000, 2000, 3000, 4000];
let finalTimer = []; */

/*--CACHED ELEMENT REFERENCES--*/

/* let scoreEl = document.getElementById("score-number");
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
 */
/*--EVENT LISTENERS--*/

/* easyB.addEventListener("click", buttonIsClicked);
mediumB.addEventListener("click", buttonIsClicked);
hardB.addEventListener("click", buttonIsClicked);
restartB.addEventListener("click", buttonIsClicked); */



/* function buttonIsClicked(e) {
    buttonPattern(e);
    restartButtonPattern(e);
}

function addEventListeners(){
    greenButtonEl.addEventListener("click", buttonIsClicked);
    yellowButtonEl.addEventListener("click", buttonIsClicked);
    blueButtonEl.addEventListener("click", buttonIsClicked);
    redButtonEl.addEventListener("click", buttonIsClicked); 
}
 */




/* function buttonPattern(el){
    if(el.target.id === easyB.id || el.target.id === mediumB.id || el.target.id === hardB.id){
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
        checkPattern();
        if(checkPattern()){
            if(turn + 1 === userPattern.length){
                turn++;
                score++;
                checkScore();    
                userPattern = [];
                if(!checkWinner()){
                    loopPatterns();
                };
            } 
        }else{
            failMessage();
        } 
    }
}

function checkPattern(){
    for(let i = 0; i < userPattern.length; i++){
        if(userPattern[i] !== pattern[i]){
            return false;
        }    
    }
    return true;  
}

function restartButtonPattern(el){
    if(el.target.id === restartB.id){
        init();
    }
}

function loopPatterns(){
    for(let i = 0; i <= turn; i++){
        boardMaker(pattern[i]);
    }
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

function checkWinner(){ 
    if(turn >= pattern.length){
        playerMessageEl.textContent = `${getInputName} has beaten Simon!`;
        winSound.play();
        return true;
    }
}

function addGreenBorder(){
    greenButtonEl.classList.add("green-ani");
    getItemOne.play();
}

function addYellowBorder(){
    yellowButtonEl.classList.add("yellow-ani");
    getItemTwo.play();
}

function addBlueBorder(){
    blueButtonEl.classList.add("blue-ani");
    getItemThree.play();
}

function addRedBorder(){
    redButtonEl.classList.add("red-ani");
    getItemFour.play();
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
    playerMessageEl.textContent = `${getInputName}, you failed do you want to try again?`;
    errorSound.play();
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

function render(){
    setInputName.textContent = getInputName;
}

setInterval(render, 100);

 */

/* 
When the user clicks on the easy button, the computer generates a random color and blinks that random color.  The computer has a counter which it uses to determine how many sequences it shows to the user.
This begins the game loop where the button that the user clicks on is captured by the computer by inserting it into an array and then comparing what is currently in the array that it generated before. If the user clicks on the right button, the counter is increased, the array is emptied, and then the counter number is used to determine how many colors are pushed into the next selection.  It then starts blinking that number of selections as the loop starts all over again


 \
 which button the user and inserts that color in an empty array.  It then compares what the user clicked to what is inside the 

*/

/*--CONSTANTS--*/

const pattern = ["green", "yellow", "blue", "red"];

/*--APP'S STATE VARIABLES--*/

let generatedSequence = [];
let sequenceCounter = 1;
let firstTimer = 0;
let secondTimer = 1000;

/*--CACHE ELEMENT REFERENCES--*/

/*--EVENT LISTENERS--*/

/*--FUNCTIONS--*/


generateNextSequence();

function generateNextSequence(){
    for(let i = 1; i <= sequenceCounter; i++){
        let randomNumber = Math.floor(Math.random() * pattern.length);
        generatedSequence.push(pattern[randomNumber]);
    }
} 

console.log(generatedSequence);

function animateSequence(){
    for(let i = 0; i < generatedSequence.length; i++){
        lightUpPatterns(generatedSequence[i]);
    }
}

//run this function after I click
function timerIncrease(){
    firstTimer += 1000;
    secondTimer += 1000;
}

function lightUpPatterns(color){
    if(color === "green"){
        setTimeout(addGreenBorder, firstTimer);
        setTimeout(removeGreenBorder, secondTimer);
    }else if(color === "yellow"){
        setTimeout(addYellowBorder, firstTimer);
        setTimeout(removeYellowBorder, secondTimer);
    }else if(color === "blue"){
        setTimeout(addBlueBorder, firstTimer);
        setTimeout(removeBlueBorder, secondTimer);
    }else if(color === "red"){
        setTimeout(addRedBorder, firstTimer);
        setTimeout(removeRedBorder, secondTimer);
    }
}


function getPatterns(){
    counter = 0;
    //check the 
    //listen to the user click
    //get the event and cross check it with generateNextSequence
    //if not right do a fail message
    //if correct, increment counter++
    //if its greater than the geneatedSequences we loop back to 1

    //while checkingSequence 
}