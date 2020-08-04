// ###### arguments keyword ######

// =================================
// arguments - arguments is list of all the arguments passed to a function, it is not techincally an array

// Example of "arguments":
function listArgument(){
  return arguments;
}

var result = listArgument(1, 2, 3)
console.log(result)
