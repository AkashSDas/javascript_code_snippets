// ###### Introduction to Objects ######

// =================================
// Unlike arrays, objects have no order
// =================================
//### Decalaring an object ###

// Objects store data in a key-value pair
var person = {
    name: "Heromine",
    age: 15,
    place: "Hogwart"
};
// =================================
//### Retrieving Data from Objects ###

// ---------------------------------
// There are two notations: dot and bractket

// bracket notation, similar to arrays:
console.log(person["name"]);

// dot notation:
console.log(person.name);
// ---------------------------------
// Differences between the 2 notation

// 1. We cannot use dot notation if the property starts with a number
// someObject.1bhah;    <=== Invaid
// someObject['1blah']; <=== Valid

// 2. We can lookup using a variable with bracket notation
var str = 'name';
// someObject.str;      <=== doesn't look for 'name'
// someObject[str];     <=== does evaluate str and looks for 'name'
console.log(person.str);
console.log(person[str]);

// 3. We cannot use dot notation for property name with spaces
// someObject.fav color;       <=== Invaild
// someObject['fav color'];    <=== Valid
// =================================
// ### Adding values to an Object ###

// 1.
// Make an empty object and then add data to it
var person = {};
person.name = 'Charlie';
person.age = 21;
person.place = 'New York';

// 2.
// All at once
var person = {
    name: 'Charlie',
    age: 21,
    place: 'New York'
};
// =================================
// ### Another way of initializing an object ###

var person = new Object();
person.name = 'Travis';
person.age = 23;
person.place = 'Las Vegas';
