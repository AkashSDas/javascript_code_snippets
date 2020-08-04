// ###### Text and Content ######

// =================================
// textContent ==> retrives the text
// innerHTML   ==> retrives the text and inner HTML tags

// While changing text with textContent or innerHTML both will erase the inner HTML tags, so be carefull while using them.
// =================================
// ### textContent ###

// Select the <p> tag:
var tag = document.querySelector("p");

// Retrieve the textContent:
tag.textContent;

// alter the textContent
tag.textContent = "blah blah blah";

document.querySelector("h1").textContent = "END";
// =================================
// ### innerHTML ###

// Select the <p> tag:
var tag = document.querySelector("p");

// Retrieve the textContent:
tag.innerHTML;

// alter the textContent
tag.innerHTML = "blah blah blah";
// =================================
// ### Difference between textContent and innerHTML ###

document.body;
document.body.textContent;
document.body.innerHTML;

document.body.textContent = "<h1>Goodbye</h1>";
// textContent won't treat the tags differently and print everything as it is on screen

document.body.innerHTML = "<h1>Goodbye</h1>";
// innerHTML will execute the effect of tags given
