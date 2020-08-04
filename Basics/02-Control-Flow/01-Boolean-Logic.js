// ###### Boolean Logic ######

// =================================
// There are only two value of boolean datatype i.e. true and false
// =================================
// ### Comparison Operator ###

var x = 5

// Operator  |         Name             | Example    | Result
// -------------------------------------------------------------
//    >      | Greater than             | x > 10     | false
//    >=     | Greater than or equal to | x >= 10    | true
//    <      | Less than                | x < -50    | false
//    <=     | Less than or equal to    | x <= 100   | true
//    ==     | Equal to                 | x == "5"   | true
//    !=     | Not equal to             | x != "b"   | true
//    ===    | Equal value and type     | x === "5"  | false
//    !==    | Not equal value or type  | x !== "5"  | true
// =================================
// ### == vs === ###

// There are two way to check for equality and non equality

var x = 99;
x == "99"   //true
x === "99"  //false

var y = null;
y == undefined  //true
y === undefined //false

// "==" performs type coercion, while "===" does not

// Type Coercion - It means that it take variables and tries to turn them to of same type and then compares the values

// Using === is much safer since it checks the types and doesn't do type coercion
// =================================
// ### Few interesting case ###

true == "1"        // true
true == "12"       // false
0 == false         // true
null == undefined  // true
NaN == NaN         // false
