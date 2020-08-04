// ###### Important Selector Methods ######

// =================================
// ### getElementById() ###

// Takes a string argument and returns the one element with a matching ID

var tag = document.getElementById("highlight")

// To check if the element is selected
console.dir(tag)
// =================================
// ### getElementsByClassName() ###

// Takes a string argument and returns a list of elements that have a matching class

var tags = document.getElementsByClassName("bolded")
console.log(tags[0])

// Its returns something which is called node list which is techinically not an array like, it is a light weight array, you can use indexing but you cannot use forEach
// =================================
// ### getElementsByTagName() ###

// Returns a list of all elements of given tag name, like <li> or <h1>

var tags = document.getElementsByTagName("li")
console.log(tags[0])

// Its returns something which is called node list which is techinically not an array like, it is a light weight array, you can use indexing but you cannot use forEach
// =================================
// ### querySelector() ###

// Returns the first element that matches a given CSS-style selector

var tags = document.querySelector("h1");
var tags = document.querySelector("li");
var tags = document.querySelector(".bolded");
var tags = document.querySelector("#highlight");

console.log(tags)
// =================================
// ### querySelectorAll() ###

// Returns a list of elements that matches a given CSS-style selector

var tags = document.querySelectorAll("h1");
var tags = document.querySelectorAll("li");
var tags = document.querySelectorAll(".bolded");
var tags = document.querySelectorAll("#highlight");

console.log(tags)
