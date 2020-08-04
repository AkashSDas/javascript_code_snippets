// ###### Array Iteration ######

// =================================
// ### Objectives ###
// 1.Iteration using for loop 
// 2.Iteration using forEach 
// 3. Compare for loops and forEach
// 4. while loop has more syntax (don't use it)
// =================================
// ### Using for loop ###

console.log("for loop");

var colors = ['red', 'pink', 'black', 'gold'];

for (var i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
// =================================
// ### Using forEach loop ###

// It is more prefered for array iteration

// arr.forEach(someFunction)
console.log("forEach");

var colors = ['red', 'pink', 'black', 'gold'];
colors.forEach(function(color){
    // color is a placeholder, call it whenever you want
    console.log(color);
});
// =================================
// ### Using while loop ###

console.log("while loop");

var colors = ['red', 'pink', 'black', 'gold'];

count = 0;
while(count < colors.length){
    console.log(colors[count]);
}
