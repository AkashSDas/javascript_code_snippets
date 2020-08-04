// ###### while loops ######

// =================================
// ### Syntax ###

// while (condition){
//     statements
// }
// =================================
// ### Examples ###

// ---------------------------------
// 1.
var x = 1;

while (x < 10) {
    console.log('count is ' + x);
    x+=2;
}
// ---------------------------------
// 2.
var str = 'hello';
var index = 0;

while (index <= str.length) {
    console.log(str[index]);
    index++;
}
// ---------------------------------
// 3.
var num = -10;
while(num < 20) {
    console.log(num);
    num++;
}
// ---------------------------------
// 4.
var evenNum = 10;
while (evenNum <= 40){
    if(evenNum % 2 === 0)
        console.log(evenNum);
    evenNum++;
}
// ---------------------------------
// 5.
var oddNum = 300;
while (oddNum <= 333) {
    if (oddNum%2 !== 0)
        console.log(oddNum);
    oddNum++;
}
// ---------------------------------
// 6.
var num = 5;
while (num <= 50) {
    if (num%3 === 0 && num%5 === 0)
        console.log(num);
    num++;
}
