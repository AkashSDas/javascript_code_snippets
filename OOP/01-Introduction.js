// ###### Introduction to Object Oriented Programming in JavaScript ######

// =================================
// ### Defining OOP ###

// - A programming model based around idea of objects
// - These objects are constructed from what is called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"
// - We strive to make our classes abstract and modular

// But JavaScript does not have "classes" built into it
// We use functions and objects to mimic classes

// Use a function as a blueprint for our model and these kinds of functions are called "construnctor" functions
// =================================
// ### Example ###

function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

// Capitaliztions of the function name - this is a convention
// We are attaching properties onto the keyword "this". We would like the keyword "this" to refer to the object we will create from our constructor function

//Doing this is not enough:
var firstHouse = House(2, 2, 1000) 
firstHouse // undefined

// Since we are returning anything from the function so our House function returns undefined 
// We are not explicitly binding the keyword "this" or placing it inside a declared object, which is not what we want!

// This problem is fixed by using the new keyword
