$("h1").addClass("big-title margin-50")
$("h1").text("Good Bye");
// to remove it write removeClass instead of addClass and hasClass return boolean expression that if the tag has class name

$("button").html("<em>Click</em>");
//text -> textContent ***** html -> innerHTML7
$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function (e) { 
    $("h1").css("color", "purple");
});

// $("button").click(function (e) { 
//     $("h1").slideUp().slideDown().animate({opacity: 0.5});
// });

let pressedKeys = "";
$("input").keypress(function (e) { 
    pressedKeys += e.key;
    $("h1").text(pressedKeys);
});
$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

$( "button" ).click(function() {
    $( "h1" ).toggle( "slide" );
  });

// $(selector).hide(); is for hide the element 
//$(selector).show(); is show the hidden element
//$(selector).toggle(); 
//$(selector).fadeIn(); show hidden element smoothly
//$(selector).fadeOut(); hide element smoothly
