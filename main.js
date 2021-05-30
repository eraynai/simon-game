/*--CONSTANTS--*/
const gamePattern = ['green', 'green', 'yellow', 'green', 'yellow'];
/*--APP'S STATE VARIABLES--*/
let score = 0;
let userPattern = [];

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
    getButtonValue(e)
    compareArray();
}

function getButtonValue(el){
    userPattern.push(el.target.id);
    
}

function compareArray(){
    if(userPattern[0] !== gamePattern[0]){
        playerMessageEl.innerHTML = "You failed, try again";
    }
}



