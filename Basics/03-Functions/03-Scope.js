// ###### Scope ######

// =================================
// ### Examples ###

// ---------------------------------
// 1.
var y = 99;

console.log(y);      // 99

function doMath(){
    var y = 100;
    console.log(y);
}

doMath();            // 100
console.log(y);      // 99
// ---------------------------------
// 2.
var phrase = 'hi there';

console.log(phrase);    // hi there

function doSomething(){
    var phrase = 'goodbye';
    console.log(phrase);
}

doSomething();          // goodbye
console.log(phrase);    // hi there
// =================================
// ### Scope is not shared between functions ###

function hi(){
    var name = 'James';
    console.log(name);
}

function bye(){
    console.log(name);
}

hi()        // James
bye()       // undefined 
