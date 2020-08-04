// ###### Events ######

// =================================
// The function (call back) isn't runed unless the event occurs, once the event happens JS calls the function
// =================================
// ### click Event ###
// =================================
// 1.

var h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    alert("h1 was clicked");
});
// =================================
// 2.

var h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    h1.style.background = "pink";
});
// =================================
// 3.

document.querySelector("ul").addEventListener("click", function () {
    console.log("YOU CLICKED UL");
});
// =================================
// 4.

var list = document.querySelectorAll('li');
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        this.style.color = "orange";
    });
    // this here referes to what ever is selected
}
// =================================
// 5.

var button = document.querySelector("button");
var p = document.querySelector("p");
var button = document.addEventListener("click", function () {
    p.textContent = "You clicked the button";
});
// =================================
// 6.

// We can also do it like this
var h1 = document.querySelector("h1");

function changeBackground() {
    h1.style.background = "blue";
}

h1.addEventListener("click", changeBackground);

// Don't use parenthese after changeBackground function because it will directly execute it
// =================================
// 7.

// ---------------------------------
// Different Button

var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function () {
    if (isPurple) {
        document.body.style.background = 'purple';
    }
    else {
        document.body.style.background = 'white';
    }
    isPurple = !isPurple;
});
// ---------------------------------
// Another way

var button = document.querySelector("button");
button.addEventListener("click", function () {
    document.body.classList.toggle('.purple');
});
// =================================
// ### Other types of events ###

// ---------------------------------
// 1. mouseover event

var firstLI = document.querySelector("li");
firstLI.addEventListener("mouseover", function () {
    firstLI.style.color = "green";
});
// ---------------------------------
// 2. mouseout event

var firstLI = document.querySelector("li");
firstLI.addEventListener("mouseout", function () {
    firstLI.style.color = "black";
});
// =================================
// ### Examples ###

var list = document.querySelectorAll("li");

// ---------------------------------
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
    })
};
// ---------------------------------
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseout", function () {
        this.style.color = "black";
    })
};
// ---------------------------------
for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseout", function () {
        this.classList.toggle("done");
    })
};
