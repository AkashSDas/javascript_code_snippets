// ###### jQuery Methods ######

// =================================
// ### .text() ###

$("h1").text();
$("ul").text();
$("li").text();

$("h1").text("changing heading");
$("li").text("all li's got changes");
$("ul").text("old li's are lost and new is added");
// =================================
// ### .html() ###

$("h1").html();
$("ul").html();
$("li").html();

$("ul").html("<li>I hacked your ul</li><li>I hacked your ul Again</li>");
$("li").html("<a href='https://www.google.com'>Click me to go to Google</a>");
// =================================
// ### .attr() ###

// ---------------------------------
// 1.

$("img").css("width", "200px");

$("img").attr("src");
$("img").attr("src", "https://unsplash.com/photos/fjBtdztrbRI");

$("input").attr("type");
$("input").attr("type", "color");
$("input").attr("type", "checkbox");
$("input").attr("type", "text");
// ---------------------------------
// 2.

$("img").css("width", "200px");
$("img:first-of-type").attr("src", "https://unsplash.com/photos/fjBtdztrbRI")
$("img").last().attr("src", "https://unsplash.com/photos/fjBtdztrbRI");
$("img").attr("src", "https://unsplash.com/photos/fjBtdztrbRI");
// =================================
// ### .val() ###

$("input").val();

// After typing Something:
$("input").val();
$("input").val("genius");

// when we will update input (e.g.: todo list) we will use the below line
$("input").val("");

// gives what option user have choosed
$("select").val();
