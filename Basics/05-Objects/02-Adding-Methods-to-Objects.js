// ###### Adding Methods to Objects ######

// =================================
var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y; 
        
    }
};

// semicolon after function name is necessary

// Now we cannot call add directly instead of that we have to:
obj.add(10,5);

// console.log() is also same console is object and log is method

console.log(obj.add(10,5));
