$(document).ready(function(){
$("button").click(function(){
var div=$("div");
div.animate({height:'400px', opacity:'0.4'},"slow");
div.animate({width:'100%', opacity:'0.4'},"slow");
});
});