// ###### The "new" Keyword ######

// =================================
// The "new" key word is reserved keyword
// We can set the context of the keyword "this" using the "new" keyword
// When the "new" keyword is used a new object is created. The "new" keyword is used with a function and inside of the function definition the keyword "this" refers to the new object that is created. Finally when the "new" keyword is used, an implicit return "this" is added to the function which is uses it.
// =================================
// ### Example ###

function Person(firstname, lastname){
  this.firstname = firstname
  this.lastname = lastname
}

var john = new Person("John", "Cena")

// The value of "this" should be the global object but while using "new" keyword the keyword "this" refers to the object that is created

console.log(john.firstname) // John
console.log(john.lastname)  // Cena
