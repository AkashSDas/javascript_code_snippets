// ###### Prototype Chain ######

// =================================
// ### Creating a Prototype ###

function Person(name){
  this.name = name;
}

Person.prototype

var john = new Person("John");
var brock = new Person("Brock")

john.__proto__ === Person.prototype   // true
brock.__proto__ === Person.prototype  // true

Person.prototype.constructor === Person // true
// =================================
// ### We are adding property to prototype ###

Person.prototype.isInstructor === true;

// We have added isInstructor property to prototype
john.isInstructor // true
brock.isInstructor // true

// How were we able to access properties on the prototype??
//    Answer is __proto__
// =================================
// ### Example ###

// 1.
var arr = [];
new Array
arr.push(10)
// How does javascript know where to look for push method, it is by __proto__
console.dir(arr)

// 2.
arr.hasOwnProperty("length");
console.dir(arr)
// =================================
// ### Refactoring To write efficient code ###

function Person(name){
  this.name = name;
  this.sayHi = function(){
    console.log("Hi " + this.name);
  }
}

john = new Person("John");
john.sayHi(); // Hi John

// Now this code works, but it inefficient
// Every time we make an object using the "new" keyword we have to redefine "this" keyword, but its the same for everyone
// For this we will put it in prototype

function Person(name){
  this.name = name;
}
Person.prototype.sayHi = function(){
  return "Hi " + this.name
}
john = new Person("John");
john.sayHi(); // Hi John
// =================================
// ### Example ###

function Vechicle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vechicle.prototype.turnOn = function(){
  this.isRunning = true;
}

Vechicle.prototype.turnOff = function(){
  this.isRunning = false;
}

Vechicle.prototype.honk = function(){
  if(this.isRunning){
    return "beep!";
  }
}

// NOTE: To share properties and methods for objects created by a constructor function, place them in the prototype as it is efficient
