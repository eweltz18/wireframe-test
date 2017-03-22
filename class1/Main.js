function scrollDown() {
	$('body').animate({scrollTop : $('.menu').offset().top}, 1000);
}

$(window).scroll(function() {
	console.log($(window).scrollTop());

	var breakpoint = 1480;
	if ($(window).scrollTop() >= breakpoint) {
		$('.menu').css('visibility', 'visible').hide().fadeIn(1500);
		$(this).off('scroll');
	}
});