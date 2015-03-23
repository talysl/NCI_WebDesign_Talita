$(document).ready(function() {
//JQuery function that tells our code when to run (runs after HTML)
$("p").hide();
//hides the paragraph tags

//as soon as a user clicks on a h1 tag  
$("h1").click(function() {

<!-- tells the browser to toggle the visibility of the tag comes after the heading tag-->
    $(this).next().slideToggle(300);
	});

});