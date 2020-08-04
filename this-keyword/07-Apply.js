// ###### Apply Method ######

// =================================
// ### Using the apply method ###

var john = {
  firstname: "John",
  sayHi: function(){
    return "Hi " + this.firstname
  },
  addNumber: function(a,b,c,d){
    return this.firstname + " just calculated " + (a+b+c+d);
  }
}

var brock = {
  firstname: "Brock",
}

var result = john.addNumber(1,2,3,4) // John just calculated 10
console.log(result)

var result = john.addNumber.call(brock,1,2,3,4) // Brock just calculated 10
console.log(result)

var result = john.addNumber.apply(brock,[1,2,3,4]) // Brock just calculated 10
console.log(result)
