// ###### Introduction to Functions ######

// =================================
// ### Objectives ###
// 1. How to declare a function
// 2. Arguments
// 3. Function Declaration vs Function Expression
// =================================
// ### Syntax ###

// function functionName(parameters){
//     statements
// }
// =================================
// ### Basic Example of Function ###

function sayHi(){
    console.log("Hi!!!");
}

sayHi(); // This will run the commands inside the sayHi function
sayHi();
sayHi();

sayHi;   // this will return the code in sayHi function
// =================================
// ### Arguments ###

function greeting(person1, person2, person3){
    console.log("hi " + person1);
    console.log("hi " + person2);
    console.log("hi " + person3);
}

greeting("Harry", "Ron", "Hermione");

greeting("Harry", "Ron"); 
// If arguments are missing then they are set to undefined and does not gives an error
// =================================
// ### Return Keyword ###

function square(number){
    return number * number;
}

console.log("square of 4 is " + square(4));

var result = square(4);
console.log("Square is " + result);
// =================================
// This function to capitalizes the first character in the string:

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = 'paris';                 //"paris"
var capital = capitalize(city);     //"Paris"
// We can capture the reuturn value in a variable
// =================================
function capitalize(str){
    if(typeof(str) === 'number'){
        return "that's not a string";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = 'paris';                 //"paris"
var capital = capitalize(city);     //"Paris"

var num = 37;
var capital = capitalize(num);      //"that's not a string"
// =================================
// ### Function Expression ###

// Another way of Decalaring a Function
// ---------------------------------
// Function Declaration Way

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// ---------------------------------
// Function Expression Way

var capitalize = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// ---------------------------------
// Issue with function expression

// consider this
var sayHi = function(){
    console.log("HELLO!!!");
}

sayHi(); // It will print "HELLO!!!"

sayHi = 34;
sayHi();  // Here it will print 34 
