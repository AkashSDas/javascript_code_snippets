// ###### new keyword ######

// =================================
// ### Example ###

function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this numSqft = numSqft;
}

// Capitaliztions of the function name - this is a convention
// We are attaching properties onto the keyword "this". We would like the keyword "this" to refer to the object we will create from our constructor function

//Doing this is not enough:
var firstHouse = House(2, 2, 1000) 
firstHouse // undefined

// Since we are returning anything from the function so our House function returns undefined 
// We are not explicitly binding the keyword "this" or placing it inside a declared object, which is not what we want!

// This problem is fixed by using the new keyword
var firstHouse = new House(2, 2, 1000) 

firstHouse.bedrooms // 2
firstHouse.bathrooms // 2
firstHouse.numSqft // 1000
// =================================
// What dose the keyword "new" do?

// 1. It creates an empty object
// 2. It then sets the keyword "this" to be that empty object
// 3. It adds the line "return this" to the end of the function, which follow it
// 4. It adds a property onto the empty object called "__proto__", which links the prototype property on the constructor function to the empty object
