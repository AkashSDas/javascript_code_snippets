// ###### Manipulating Attributes ######

// =================================
// getAttribute() ==> Used to read attributes like src or href
// setAttribute() ==> Used to write attributes like src or href
// =================================
var link = document.querySelector("a");
link.getAttribute("href"); // gives the link

// CHANGE HREF ATTRIBUTE
link.setAttribute("herf", "https://www.google.com");
// <a href="http://www.google.com">Link Name</a>

// TO CHANGE THE IMG SRC
document.querySelector("img").setAttribute("src", "./photo2.jpeg");
// <img src="photo.jpg">
