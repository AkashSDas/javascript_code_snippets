// ###### Logical Operators ######

// =================================
// ### There are 3 logical operators ###

// && - AND
// || - OR
// !  - NOT
// =================================
// ### Table of Understanding ###

var x = 5, y = 9

// Operator | Name | Example        | Result
// -------------------------------------------
// &&       | AND  | x<10 && x!==5  | false
// ||       | OR   | y>9 || x===5   | true
// !        | NOT  | !(x===y)       | true
// =================================
// ### Truthy and Falsy Values ###

// Values that aren't actually true or false, are still inheretly "truthy" or "falsey" when evaluated in a boolean context.

// !Anything ==> If we get true then it is falsey or If we get false then it is truthy
// !"Hello world"
// !!"Hello world"

// -1 is truthy in javascript

// Falsey Values in JavaScript
//  - false
//  - 0
//  - ""
//  - null
//  - undefined
//  - NaN
    
// Everything else is truthy
