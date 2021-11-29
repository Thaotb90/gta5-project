/* Animated Titles of Sections*/

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
    $('.section-heading .section-title, .section-heading .section-desc').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated fadeInUp')
        }
    });
    $('.section-heading .boxed-img').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated zoomIn')
        }
    });
    $('#character .character-active').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated fadeInLeft')
        }

    });
    $('#character .character-nav').each(function() {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated fadeInRight')
        }

    });


});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("nav.fixed-top").removeClass("change-height");
	} else {
		$("nav.fixed-top").addClass("change-height");
	}
});