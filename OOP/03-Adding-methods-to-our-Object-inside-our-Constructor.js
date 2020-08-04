// ###### Adding methods to our Object inside our Constructor ######

// =================================
// We can add methods to our object inside of the constructor function

// Example: 
function Dog(name, age){
  this.name = name;
  this.age = age;
  // Adding method
  this.bark = function(){
    console.log(this.name + " just barked!");
  }
}

var rusty = new Dog("Rusty", 3);
var fido = new Dog("Fido", 1);

rusty.bark();
fido.bark();
