// ###### replace() Method ######

// =================================
// ### To replace a string/character ###

var str = "Hello-World";
var res = str.replace("-","_");
// =================================
// ### For global replacement ###

var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");
// =================================
// ### For global and case-insensitive replacement ###

var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/gi, "red");
