$( document ).ready(function() {
	$("#button").click(function() {
		$('html, body').animate({
			scrollTop: $("#services").offset().top
		}, 2000);
	});
});