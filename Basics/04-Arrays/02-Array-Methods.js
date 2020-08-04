// ###### Array Methods ######

// =================================
// ### push ###

// push() method adds element at the end of array

var colors = ['red', 'black', 'white'];
colors.push('purple');
// ['red', 'black', 'white', 'purple']
// =================================
// ### pop ###

// pop() method removes element at the end of array

var colors = ['red', 'black', 'white'];
colors.pop('purple');
// ['red', 'black']
// 'white' has been poped out from the colors array
// =================================
// ### unshift ###

// unshift() method adds element at the begining of an array

var colors = ['red', 'black', 'white'];
colors.unshift('purple');
// ['purple', 'red', 'black', 'white']
// =================================
// ### shift ###

// shift() method removes element at the begining of an array

var colors = ['red', 'black', 'white'];
colors.shift();
// ['black', 'white']

// shift also returns the element that is removed
var removed = colors.shift();
console.log(removed);
// =================================
// ### indexOf() ###

var friends = ['Charlie', 'James', 'David', 'Matthew'];

console.log(friends.indexOf('Charlie'));

// indexOf() returns -1 when something is not present in the array
console.log(friends.indexOf('Bane'));
// =================================
// ### slice() ###

// slice(begin, end+1)
// Here begin is the starting index and end is the end index

var fruits = ['apple', 'mango', 'banana', 'kivi'];
var sliced = fruits.slice(1,3);
// ['mango', 'banana']
