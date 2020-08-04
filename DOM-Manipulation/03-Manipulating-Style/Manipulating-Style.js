// ###### Manipulating Style ######

// =================================
// ### Ways ###

// We can manipulate style by two ways:
// 		- style
// 		- classList (best way)
// =================================
// ### Manipulation ###

// Objectives
//      - changing an element's style
//      - adding/removing classes
//      - changing the content of a tag
//      - changing attributes(src, href, etc.)
// =================================
// ### Using style and classList to manipulate elements ###

// ---------------------------------
// Selecting element
var tag = document.getElementById("highlight");
// ---------------------------------
// Manipulating element using style

// Here the right side i.e. values must be a string
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";
// ---------------------------------
// Here tere is a lot of repeated code i.e. tag.style
// Is this a bad idea?
// It is recommended for styles to be defined in a separate file/files. The style propery allows for quickly styling for testing purpose. - MDN
// Separation of concerns - HTML, CSS, JS have some overlapping
// ---------------------------------
// An alternative is using classList

// Rather than directly manipulating style with JS, we can define a CSS class and then toggle it on or off with JS.
// INSTEAD OF THIS:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "3px solid red";

// DEFINE A CLASS IN CSS
//  .some-class {
//        color: pink;
//      border: 10px solid red;
//   }
// ADD THE NEW CLASS TO THE SELECTED ELEMENT
var tag = document.getElementById("highlight");
tag.classList.add(".some-class");

// This is better, because now we are not converting each and every element through JS, we are just adding/removing/toggling the style with JS

// classList - A read-only list that contains the classes for a given element. It is NOT AN ARRAY.
// so we camnnot use push, pop, etc.
// =================================
// ### add, remove and toggle ###

// ADD A CLASS TO THE SELECTED ELEMENT
tag.classList.add(".another-class");

// REMOVE A CLASS
tag.classList.remove(".another-class");

// TOGGLE A CLASS
tag.classList.toggle(".another-class");
// =================================
// ### Examples ###

var h1 = document.querySelectorAll("h1");

h1.classList.add(".big");
h1.classList.remove(".big");

h1.classList.toggle(".big");
// toggle returns true and flase
