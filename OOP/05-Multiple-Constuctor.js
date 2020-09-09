// ###### Multiple Constuctor ######

// =================================
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  // we can also set properties on the keyword "this" that are preset value
  this.numberWheels = 4;
}

function Motorcycle(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.numberWheels = 2;
}

// Notice how much duplication is going on in the Mototrcycle function. 
// To solve this
// We cannot use this code block
function Motorcycle(make, model, year){
  Car(make, model, year);
  this.numberWheels = 2;
}
// Since in the Car function "this" keyword refers to the Car and not to the Motorcycle

Motorcycle.make;  // undefined
Motorcycle.model; // undefined
Motorcycle.year;  // undefined

// Here we have to change "this" keyword, to which it refers to.
// For this we have to  use call or apply methods

// Here we change the value of "this" keyword
function Motorcycle(make, model, year){
  // using call
  Car.call(this, make, model, year);
  this.numberWheels = 2;
}

function Motorcycle(make, model, year){
  // using apply
  Car.apply(this, [make, model, year]);
  this.numberWheels = 2;
}

// We can also use "arguments" keyword
function Motorcycle(make, model, year){
  // using apply
  Car.apply(this, arguments);
  this.numberWheels = 2;
}
