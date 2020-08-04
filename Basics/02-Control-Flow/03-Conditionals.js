// ###### Conditionals ######

// =================================
// ### if ###

// Syntax:
// if(conditions){
//     statements
// }

var num = 10
if (num === 10){
    console.log("Number is equal to 10")
}
// =================================
// ### else ###

// Syntax:
// if(conditions){
//     statements
// }
// else {
//     statements
// }

var num = 10
if (num !== 10){
    console.log("Number is not equal to 10")
}
else {
    console.log("Number is equal to 10")    
}
// =================================
// ### else if ###

// Syntax:
// if(conditions){
//     statements
// }
// else if(conditions){
//     statements
// }
// else {
//     statements
// }

var num = 10
if (num !== 10){
    console.log("Number is not equal to 10")
}
else if (num === 10){
    console.log("Number is equal to 10")
}
else {
    console.log("What have you entered???")    
}
// =================================
// ### Example ###

var age = prompt("What is your age ?");

console.log("Your age is " + age);

 if (age == 21){
    console.log("Happy 21st birthday");
}

if (age < 0){
    console.log("Please enter you age correctly");
}
else if (age < 18)
    console.log("Sorry you cannot enter");
else if (age < 21){
    console.log("You can enter but cannot have drinks");
}
else {
    console.log("You can enter and have drinks");
}

if (age % Math.sqrt(age) === 0) {
    console.log("You age is a perfect square");
}
if (age % 2 !== 0){
    console.log("Your age is odd");
}

alert("Have a good day!!!");
