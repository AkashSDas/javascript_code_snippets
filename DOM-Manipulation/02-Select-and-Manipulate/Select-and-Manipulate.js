// ###### Select and Manipulate ######

// =================================
// ### Selecting and Manipulating h1 tag ###

// Selecting <h1>
var h1 = document.querySelector("h1");

// Manipulating <h1>
h1.style.color = "pink";
// =================================
// ### Selecting and Manipulating body tag ###

// Selecting <body> and changing color every second

// Selecting <body>
var body = document.querySelector("body");
var isBlue = false;

// Manipulating <body>
setInterval(function () {
    if (isBlue) {
        body.style.background = "red";
    } else {
        body.style.background = "blue";
    }
    isBlue = !isBlue;
}, 1000);
