// ###### myforEach ######

// =================================
// JavaScript provides an easy built-in way of iteration over an array: For-Each
// =================================
// ### Built-in forEach function ###

// Syntax: array.forEach(someFunction);

var colors = ["red", "blue", "black", "white", "pink", "cyan"];

colors.forEach(function(color){
    console.log(color);
});

function myForEach(arr, func){
    // loop through array
    for(var i=0; i<arr.length; i++){
        // call func for each item in array
        func(a[i]);
    }
}

myForEach(colors, function(){alert("HI")});
// =================================
// ### Making our forEach ###

// Anything defined in the prototype available and usable in every array 
Array.prototye.myForEach = function(func){
    for(var i=0; i<this.length; i++){
        func(this[i]);
    }
};

colors.myForEach(function(color){
    console.log(color);
});
