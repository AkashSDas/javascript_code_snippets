// ###### Introduction to Arrays ######

// =================================
// ### Basic Example ###

var friends = ['Charlie', 'James', 'David', 'Matthew'];

console.log(friends[0]);
console.log(friends[11]); // out of range

friends[0] = 'Emily';     // changing the elements of friends
console.log(friends[0]);
friends[4] = 'Ron';       // adding new elements

console.log(friends);

friends[10] = 'Charlie';
// In above case 6 undefined postions will be created since in those indexes don't have any values

console.log(friends[10]);
console.log(friends[6]);
// =================================
// ### Initializing Empty Array ###

// We can initialize an empty array in two ways

// First way
var friends = [];

// Second way
var friends = new Array(); 
// This is not prefered
// =================================
// ### Arrays can hold any type of data ###

var random = [43, 'Bond', true, null];
// =================================
// ### Length of an Array ###

// To find length of an array we use the length attribute

var nums = [1, 2, 3, 4];
console.log(nums.length);
