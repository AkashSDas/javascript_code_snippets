// ###### "this" keyword basics ######

// =================================
// *** "this" keyword is very tricky ***
// =================================
var comments = {};

comments.data = ["Good Job!", "Bye", "Lame..."];
// Object {data:Array[3]}

function print(arr){
    arr.forEach(function(el){
        console.log(el);
    });
}
// print function is not a method, it exsit outside the object

print(comments.data);

comments.print = function(){
    this.data.forEach(function(el){
        console.log(el);
    });
};
// this keyword here refers to object comments
// comment object now have data and print 
// print method is refering to this.data, so when we are inside the print, this is refering to entire object that has data inside it.
// this.data is how we can go inside print and can access data.

comments.print();
