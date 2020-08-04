// ###### forEach Loop ######

// =================================
// 1.

var colors = ['red', 'pink', 'black', 'gold'];

colors.forEach(function(color){
    // color is a placeholder, call it whenever you want
    console.log(color);
});

// The anonymous function is repeated for every single element in the array
// =================================
// 2.

colors.forEach(function(){
    console.log("INSIDE THE FOEEACH");
});

// It is same as for loop in Python, just the concept behind it
// In Python :
// for anything in (list/array/tuple):
//      print(anything)
// =================================
// 3.

function printColor(color){
    console.log('***********');
    console.log(color);
    console.log('***********');
}

printColor();

colors.forEach(printColor);

// It is like printColor(colors[i])
// Don't use colors.forEach(printColor()), by doing this it will executes the printColor() function, it doesn't matter we are calling forEach
// =================================
// 4.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ['red', 'blue', 'orange'];

numbers.forEach(function(color){
    if(color%3 === 0){
        console.log(color);
    }
});
// =================================
// ### Important Notes ###

// ---------------------------------
// forEach loop takes a callback function, that callback function is expected to have atleast 1, but up to 3 arguments.
// ---------------------------------
// The arguments are in specific order:

// The first one represents each element in the array(per loop iteration) that .forEach was called on.
// The second represents the index of said element.
// The third represents the array that .forEach was called on (it wil be the same for every iteration of loop).
// ---------------------------------
// We can have couple of options when calling forEach on an array.
// ---------------------------------
// We can pass in an anonymous:

[1,2,3].forEach(function(el, i, arr){
    console.log(el, i, arr);
});
// ---------------------------------
// We can pass in a pre-written, named function:

function logNum(el, i, arr){
    console.lg(el, i, arr);
}

[1,2,3].forEach(logNum);

// In the above line we just passed the logNum function we didn't invoke it, .forEach does that for us, in fact it invokes it multiple times once for every element inside of the array.
