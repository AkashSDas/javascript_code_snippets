// ###### Namespacing ######

// =================================
// So need namespacing to keep our code organize
// =================================
// ### Example ###

// for dogs
function speak(){
    return "WOOF!";
}
console.log(speak());
// for cats
function speak(){
    return "MEOW!";
}
console.log(speak());

// NOTICE: The speak function for dog also changes when speak function is set for cat

// Now we can see I cannot access my original speak i.e. "WOOF!"
// THERE IS NAMESPCAE COLLISION
// To avoid that we need to used function inside objects

var dogSpace = {};
dogSpace.speak = function(){
    return "WOOF!"; 
};

var catSpace = {};
catSpace.speak = function(){
    return "MEOW!";
};

console.log(dogSpace.speak());
console.log(catSpace.speak());
// =================================
// ### Real World Example of Namespacing ###

// user.delete();
// comment.delete();
// post.delete();
