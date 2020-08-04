// ###### Call Method ######

// =================================
// ### Using the call method ###

var person = {
  firstname: "Brock",
  sayHi: function(){
    return "Hi " + this.firstname
  },
  determineContext: function(){
    return this === person
  },
  nestedObject: {
    sayHello: function(){
      return "Hello " + this.firstname
    }, 
    determineContext: function(){
    return this === person
    }
  }
}

var result =  person.nestedObject.sayHello.call(person)
console.log(result) // Hi undefined

var result =  person.nestedObject.determineContext.call(person)
console.log(result) // true
// =================================
// ### Using Call in the Wild ###

// We can use call function to avoid code duplication
var john = {
  firstname: "John",
  sayHi: function(){
    return "Hi " + this.firstname
  }
}

var brock = {
  firstname: "Brock",
  sayHi: function(){
    return "Hi " + this.firstname
  }
}

john.sayHi() // Hi John
brock.sayHi() // Hi Brock
// =================================
// ### Refactoring the duplication using call ###

var john = {
  firstname: "John",
  sayHi: function(){
    return "Hi " + this.firstname
  }
}

var brock = {
  firstname: "Brock",
}

var result = john.sayHi() // Hi John
console.log(result)
var result = john.sayHi.call(brock) // Hi Brock
console.log(result)
