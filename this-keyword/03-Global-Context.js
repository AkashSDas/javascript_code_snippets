// ###### Global Context ######

// =================================
// When 'this' is not inside of a declared object
// Which means that there has not been an object defined which contains the keyword this

// When we see the keyword 'this' in the Global Context it's value refers to the global object. Which in case of browser is the "window object". 
// In fact every variable we declare in the global scope is actually attached to the window object.
// =================================
// ### Example ###

var person = "John"
console.log(window.person)

// That is:
person === window.person

console.log(this)
// The value of "this" outside the object is the global object
// window ==> for browsers
// =================================
// ### Adding property to the object ###

// Delcaraing an object
var student = {}

// Adding property to the object
student.name = "John"

// Now we have ==> Object{student: "John"}
// This is what is said as inside of a declared object
// =================================
// ### this keyword inside a function ###

// When we keep the "this" keyword inside a function it's value is still the global object, Remembar that the global rule applies when "this" keyword is inside a declared object
function whatIsThis(){
  return this
}

// We are attacing property onto keyword "this"
// Since keyword "this" refers to global object, anything attached to it becomes a global variable.
function whatIsThis(){
  this.student = "John"
}
// This means we can use that variable outside the function.

// This is a bad practice

// We can also delcare a variable inside a function and still use it globally by omitting the var keyword
function student(){
  student = "Brock"
}
// But this is still a bad prcatice 

// Since "this" keyword is global variable, we can accidentally make a global variable
// Example:
function mistake(){
  this.badIdea = "oops"
}

// To avoid this there is "Strict Mode"
// We enable strict mode and we are not inside a declared object

// Use this to add strict mode, this will give error when we create global variable
"use strict"
