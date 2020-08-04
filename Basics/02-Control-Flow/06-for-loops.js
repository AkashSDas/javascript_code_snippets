// ###### for loops ######

// =================================
// ### Syntax ###

// for([initialization]; [condition]; [final-expression])
//      statements
// =================================
// ### Examples ###

// ---------------------------------
for (var count=1; count<6; count++){
    console.log(count);
}
// the count is post-incremented to 6 but not printed since it didn't meet the condition
console.log(count);

console.log('another example');
// ---------------------------------
// Below is better version of how for loops can be used

for (var i=0, str='hello'; i<str.length; i++){
    console.log(str[i]);
}
// ---------------------------------
console.log("All numbers between -10 and 19");

for (var num=-10; num<=19; num++) {
    console.log(num);
}
// ---------------------------------
console.log("All even numbers between 10 and 40");

for (var num=10; num<=40; num++) {
    if(num%2===0)
        console.log(num);
}
// ---------------------------------
console.log("All odd numbers between 300 and 333");

for (var num=300; num<=333; num++) {
    if(num%2 !== 0)
        console.log(num);
}
// ---------------------------------
console.log("All numbers divisible by 5 and 3 between 5 and 50");

for (var num=5; num<=50; num++) {
    if(num%3 === 0 && num%5 === 0)
        console.log(num);
}
