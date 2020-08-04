// ###### Implicit/Object ######

// =================================
// When keyword "this" is inside a declared object
// This rule states that when keyword "this" is found inside a declared object, value of this will always be closest parent object.
// strict mode does NOT make a difference here
// =================================
// ### Example ###

var person = {
  firstname: "Brock",
  sayHi: function(){
    return "Hi " + this.firstname
  },
  determineContext: function(){
    return this === person
  }
}

// Here the "this" keyword is inside a decalred object so the closest parent object will be value of "this", which is the object person

var result = person.sayHi()
console.log(result) // Hi Brock

var result = person.determineContext()
console.log(result) // true
// =================================
// ### Nested Objects ###

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

// The "this" keyword inside the nested object will refers to the nearest parent object i.e. nestedObject and not the person object.
// But nestedObject has no key as firstname so it will be undefined

var result = person.nestedObject.sayHello()
console.log(result) // Hello undefined

var result =  person.nestedObject.determineContext()
console.log(result) // false

// How to explicitly set "this" keyword to be person instead of nestedObject

// For this we have to use the Third Rule - Explicit Binding
