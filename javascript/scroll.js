$(document).ready(function() {
	$('.scrollButton').on('click', function(event) {
		if(this.hash !== '') {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
});
// ref: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
