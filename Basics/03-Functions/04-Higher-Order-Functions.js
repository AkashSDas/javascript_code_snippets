// ###### Higher Order Functions ######

// =================================
// Higher-order functions are functions that take other functions as arguments or return functions as their results. 

// Taking an other function as an argument is often referred as a callback function, because it is called back by the higher-order function

// This is a concept that Javascript uses a lot
// =================================
// setInterval() method takes a function as argument and call it after specific intervals

function sing(){
    console.log("twinkle twinkle...");
    console.log("how i wonder...");
}

setInterval(sing, 1000); // 1000 milisecond

// setInterval returns a number which is used to close it
clearInterval(2); // inside parenthese put that number that you get from setInterval
// =================================
// ### Anonymous Function ###

setInterval(function(){
    console.log("I am an anonymous function!!");
}, 2000);
