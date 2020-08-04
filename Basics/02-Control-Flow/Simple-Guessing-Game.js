// ###### Simple Guessing Game ######

// =================================
var secretNum = 7;

var guessNum = Number(prompt("Your guess"));

if (guessNum === secretNum) {
    console.log("You got it right");
}
else if (guessNum < secretNum) {
    console.log("Your guess is low");
}
else {
    console.log("Your guess is high");
}
