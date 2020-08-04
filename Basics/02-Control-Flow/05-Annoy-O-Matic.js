// ###### Annoy-O-Matic ######

// =================================
// One way to use while loop is that we set how many times the loops will work but other of using a while where we don't know how many times the loop will be working

// Annoy-O-Matic is a fancy term for annoying websites that constantly asks us "are we there yet?" and there we have to enter "yes" or "yeah" anything other than that will run the loop again and will ask the same question to us
// =================================
// ### Creating a Annoy-O-Matic ###

var answer = prompt("Are we there yet ?");

while (answer !== "yes" && answer !== "yeah"){
    answer = prompt("Are we there yet ?");
}
if (answer === 'yes' || answer === 'yeah'){
    alert("YAY we made it");
}
// =================================
// ### indexOf() ###

var str = 'hello world'
str.indexOf("w")
str.indexOf("world")
str.indexOf("lol")
// =================================
// ### VERSION 2 of Annoy-O-Matic ###

var answer = prompt("Are we there yet ?");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1){
    answer = prompt("Are we there yet ?");
}
if (answer === 'yes' || answer === 'yeah'){
    alert("YAY we made it");
}
