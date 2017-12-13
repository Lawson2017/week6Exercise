
//WHEN THE PAGE IS READY, DO THIS
$(document).ready(function() {
	$(".dissapear").click(function() {
		$("img").fadeOut()
	});
	$(".appear").click(function(){
		$("img").fadeIn()
	}); 
	$("h1").click(function(){
		$(this).toggleClass("newClass")
	});
	$(".add").click(function(){
		$("ul").append("<li>three</li>")
	});
	$(".testDiv").hover(function(){
		$(this).toggleClass("testDiv2")
	});
	$("h2").click(function(){
		$("h2").fadeToggle()
	});
	$(".clickToFade").click(function(){
		$(".fadeTest").fadeToggle(500)
	});
});
	