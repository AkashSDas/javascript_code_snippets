// ###### Manipulating Styles ######

// =================================
// 1.

// With jQuery
$("h1").css("color", "red");

// Without jQuery
document.getElementsByTagName("h1")[0].style.color = "pink";
// =================================
// 2.

var styles = {
    color: "green",
    border: "1px solid purple",
    background: "yellow"
}

$("h1").css(styles);
// =================================
// 3.

// With jQuery
$("li").css("color", "blue");

// Without jquery
var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = "purple";
}
// =================================
// 4.
$("a").css("font-size", "20px");
// =================================
// 5.

$("li").css({
    fontSize: "10px",
    // in javascript and jQuery it's fontSize
    border: "2px dashed cyan",
    background: "rgba(94, 52, 59, 0.5)"
});
