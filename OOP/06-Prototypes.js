// ###### Prototypes ######

// =================================
// 1. Every constructor function has a prototype on it called "prototype", which is an object
// 2. The object has a property on it called "constructor", which points back to the constructor function

// Anytime an object is created using the "new" keyword, a property called "__proto__" gets created, linking the object and the prototype property the construction function

// prototype is an object, so it can also has property and attributes attached to it
// Thses properties are shared and accessible like any object that is created from that constuctor function when new keyword is used
// =================================
// ### Example ###

function Person(name){
  this.name = name;
}
// 
Person.prototype

var john = new Person("John");
var brock = new Person("Brock")

// Since we use the "new" keyword, we have established a link between the object and the prototype property ,we can access that using __proto__
john.__proto__ === Person.prototype // true
brock.__proto__ === Person.prototype // true

// constructor property is not what we will be manipulating frequently but it is very important part in concept called "Inheritance"

// The Person.prototype object also has a property called constructor which points back to the function
Person.prototype.constructor === Person // true
// =================================
// Prototype:
//    - The prototype is shared among all objects created by that constructor function
