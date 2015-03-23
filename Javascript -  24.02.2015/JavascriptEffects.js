$(document).ready(function(){
//Jquery function that tells our code when to run
$("p").hide();
//hides paragraph
$("h1").click(function(){
//e.g.: 300 is the velocity of the slide down
$(this).next().slideToggle(300);
});
});