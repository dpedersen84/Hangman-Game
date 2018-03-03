// Arrays //

// Letters

var letter = ["a","b","c","d","e","f","g","h",
                "i","j","k","l","m","n","o","p","q","r",
                "s","t","u","v","w","x","y","z"];

// Words To Guess

var wordArr = ["homer", "springfield", "kwik-e-mart", "eat my shorts", "bart", "lisa", "marge", "maggie"]
var wordRandom = wordArr[Math.floor(Math.random() * wordArr.length)];
document.getElementById(wordRandom, wordRandom < wordArr)
console.log(wordRandom);

// Starting Lives

var lives = 10;


// Functions //

document.getElementById("wordRandom");

document.onkeyup = function(event) {

    console.log(event.key);
};