//VARIABLES

//Letters
var letters = ["a","b","c","d","e","f","g","h",
                 "i","j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z"];

//Stats Default
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var guessThisWord = null;

// Words
var wordArr = ["homer", "springfield", "kwik-e-mart", "eat my shorts", "bart", "lisa", "marge", "maggie"]


//FUNCTIONS

//Guesses Left
function newGuessesLeft () {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//Random Word Generated
function newGuessThisWord () {
    this.guessThisWord = this.wordArr[Math.floor(Math.random() * this.wordArr.length)];
    console.log("Word To Guess: " + guessThisWord);
};

//Letters Guessed
function newGuessedLetters () {
    document.getElementById("letters").innerHTML = "Letters Guessed: " + guessedLetters.join(", ");
};

//Reset
function reset () {
    guessesLeft = 10;
    guessedLetters = [];

    //Call
    newGuessesLeft ();
    newGuessThisWord ();
    newGuessedLetters ();
}

//Call
newGuessThisWord ();
newGuessesLeft ();

//MAIN
//Key Event
document.onkeyup = function (event) {
    guessesLeft--;
    console.log("Guesses Left: " + guessesLeft);
    console.log(event.key);

    var letter = String.fromCharCode(event.which).toLowerCase();
}