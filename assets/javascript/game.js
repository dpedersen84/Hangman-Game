//VARIABLES

//Letters
var letters = ["a","b","c","d","e","f","g","h",
                 "i","j","k","l","m","n","o","p","q","r",
                    "s","t","u","v","w","x","y","z"];

//Stats Default
var wins = 0;
var losses = 0;
var guesses = 5;
var guessesLeft = 5;
var guessedLetters = [];
var guessThisWord = null;

//Sounds
var audioElement1 = document.createElement("audio");
    audioElement1.setAttribute("src", "./assets/sounds/Doh.wav");
var audioElement2 = document.createElement("audio");
    audioElement2.setAttribute("src", "./assets/sounds/WooHoo.wav");

// Words
var wordArr = ["homer", "bart", "lisa", "marge", "maggie"]


//FUNCTIONS

//Guesses Left
function newGuessesLeft () {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//Random Word Generated
function newGuessThisWord () {
    this.guessThisWord = this.wordArr[Math.floor(Math.random() * this.wordArr.length)];
    console.log("Word To Guess: " + guessThisWord);    

    var str = guessThisWord;
    var strLength = str.length;
    for (var x = 0; x < strLength; x++) {
        var y = str.replace(str, '_ ');
        document.getElementById("word").innerHTML = y;
    } 

};

//convert to _
//how many letters in string?


//place on Dom
//

//Letters Guessed
function newGuessedLetters () {
    document.getElementById("letters").innerHTML = "Letters Guessed: " + guessedLetters.join(", ");
};

//Reset
function reset () {
    guessesLeft = 5;
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

//Save Key to Variable    
var letter = String.fromCharCode(event.which).toLowerCase();

//Put Letter Variable into Guessed Letters Array
    guessedLetters.push(letter); //Pushes Letter Variable to Guessed Letters Array
    newGuessesLeft(); //Updates the number of Guesses Left
    newGuessedLetters(); //Adds letter to Guessed Letters Array on DOM

if (guessThisWord.includes(letter)) {
    audioElement2.play(); //Sound on Win
    wins++
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    alert("Winner!");
    console.log("Winner!");
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    reset();

}else if(guessesLeft == 0) {
    audioElement1.play(); //Sound on Loss
    losses++
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    alert("Game Over!");
    console.log("Game Over!");
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    reset ();
}


};//END