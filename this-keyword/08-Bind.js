// ###### Bind Method ######

// =================================
// ### Using the bind method ###

// The parameters works like call, but bind returns a function with the context of "this" bound already
// It is has good usecase 'when we don't know all the arguments to be passed 

var john = {
  firstname: "John",
  sayHi: function(){
    return "Hi " + this.firstname
  },
  addNumber: function(a,b,c,d){
    return this.firstname + " just calculated " + (a+b+c+d);
  }
}

var brock = {
  firstname: "Brock",
}

var brockCalc = john.addNumber.bind(john,1,2,3,4)
var result = brockCalc();
console.log(result) // John just calculated 10

// With bind we do not need to know all the arguments up front
var brockCalc = john.addNumber.bind(brock,1,2)
var result = brockCalc(3,4);
console.log(result) // John just calculated 10

// Another very common usecase of bind is to set the context of keyword "this" to a function that will be called later. This happens when dealing with asynchronus codes, which doesn't run line by line
// =================================
// ### Example of Asynchronus Code ###

setTimeout(function(){
  console.log("Hello World")
}, 20000)
// setTimeout is a method on window object, it takes a function and a time-interval in miliseconds, after that time interval the function will be executed. Untill then we can perform other function or task. This is a simple example of Asynchronus Code

// Very commonly we lose the context of "this", but in functions that we do not want to execute right away!

// Object
var john = {
  firstname: "John",
  satHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstname)
    }, 1000)
  }
}
// What does this here refers to?
// The "this" keyword is clearlly inside a declared object however the setTimeout is called later in time, the keyword "this" does not refers to parent object, it refers to the global object.
// Since setTimeout is called later in time, the object that it is attached to is the window (setTimeout is a method on the window object) even though it is defined in the john object, when it is declared the context in which the function is executed is the global context

// Since we are loosing the correct context of the function we have to explicitly set to what keyword "this" refers to.

// For that we can use call and apply but they both make the function run immediately, but we want it to run later point in time, For that we will use bind method.

var john = {
  firstname: "John",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.firstname)
    }.bind(this), 1000)
    // the "this" key in the above line refers to the john object itself, so we are passing it as the first argument. Instead of using "this" we can pass john and the result will be the same
  }
}

john.sayHi(); // Hi John (1000 millisecond later)
