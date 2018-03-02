// Arrays

var alphabet = ["a","b","c","d","e","f","g","h",
                "i","j","k","l","m","n","o","p","q","r",
                "s","t","u","v","w","x","y","z"];
// Words To Guess
var word = ["homer", "springfield", "kwik-e-mart", "eat my shorts", "bart", "lisa", "marge", "maggie"]
// Starting Lives
var lives = 10;


document.getElementById("guess").value = "_";
var answerArray = [];
for (var i = 0; i <word.length; i++) {
    answerArray[i] = "_";
}

// This section for when user guesses a letter

var guessedLetters = document.getElementById("letters");

document.onkeyup = function(event) {
    guessedLetters.textContent = event.key;

};