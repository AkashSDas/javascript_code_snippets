// ###### jQuery Effects ######

// =================================
// ### fadeOut ###

// ---------------------------------
// This fades out in 1000 second
$("button").on("click", function () {
    $("div").fadeOut(1000);
    console.log("Fade Completed!");
});

// But main issue here is that berfore fadeout is completed the console.log line is performed, JS does't wait for 1000 second
// ---------------------------------
// To garuntee that the console.log is executed after the fadeout is completed, we will use the given callback function

$("button").on("click", function () {
    $("div").fadeOut(1000, function () {
        console.log("Fade Completed!");
    });
});
// ---------------------------------
// More common secneraro is to remove things once they are faded
// Now the elements are fading but they are not getting deleted
// To remove we will use the remove method

$("button").on("click", function () {
    $("div").fadeOut(1000, function () {
        $(this).remove();
    });
});
// =================================
// ### fadeIn ###

$("button").on("click", function () {
    $("div").fadeIn(1000, function () {
    });
});
// =================================
// ### fadeToggle ###

$("button").on("click", function () {
    $("div").fadeToggle(1000, function () {
    });
});
// =================================
// ### slideDown ###

("button").on("click", function () {
    $("div").slideDown();
});
// =================================
// ### slideUp ###

("button").on("click", function () {
    $("div").slideUp();
});
// =================================
// ### slideToggle ###

("button").on("click", function () {
    $("div").slideToggle();
});
