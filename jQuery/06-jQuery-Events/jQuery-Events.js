// ###### jQuery Events ######

// =================================
// ### .click() ###

$("h1").click(function () {
    alert("h1 clicked");
});

$("button").click(function () {
    alert("button clicked");
});

$("button").click(function () {
    $(this).css("background", "pink");
});
// NOTE: since we are using jQuery Object i.e. .css() we have to use $(this)

$("button").click(function () {
    var text = $(this).text();
    alert("You clicked " + text);
});
// =================================
// ### .keypress() ###

$("input[type='text']")

$("input[type='text']").keypress(function () { console.log("You pressed key"); })

$("input[type='text']").keypress(function (event) { console.log(event); })

$("input[type='text']").keypress(function (event) { if (event.which === 13) { alert("You hit enter"); } })
// =================================
// ### .on() ###

// click event
$("h2").on("click", function () { $("h2").css("color", "purple") });
$("h2").on("click", function () { $(this).css("color", "purple") });

// double click event
$("button").on("dblclick", function () {
    alert("DOUBLED CLICK");
})

// keypress event
$("input").on("keypress", function () { console.log("KEYPRESSED") });

// drag start event
$('a').on("dragstart", function () {
    console.log("DRAG STARTED");
})

// mouseenter event
$("button").on("mouseenter", function () { $(this).css("font-weight", "bold"); });

// mouseleave event
$("button").on("mouseleave", function () { $(this).css("font-weight", "normal"); });
