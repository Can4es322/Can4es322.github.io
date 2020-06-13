$(".link").on("click", function(event){
event.preventDefault();
var selector = $(this).attr("href");
var options = {
scrollTop : $(selector).offset().top
};
$("html, body").animate(options,1000);

});


$(".link1").on("click", function(event){
event.preventDefault();
var selector = $(this).attr("href");
var options = {
scrollTop : $(selector).offset().top
};
$("html, body").animate(options,1000);

});


$(".link2").on("click", function(event){
event.preventDefault();
var selector = $(this).attr("href");
var options = {
scrollTop : $(selector).offset().top
};
$("html, body").animate(options,1000);

});