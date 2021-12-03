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
		$("nav.fixed-top").removeClass("change-height", 1000);
	} else {
		$("nav.fixed-top").addClass("change-height", 1000);
	}
});

$(document).ready(function(){
    $('.header .navbar-nav .nav-link').click(function(){
        $('.header .navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    })
})

$(document).ready(function(){
    $('#navbarSupportedContent .nav-link').click(function(){
        $('#navbarSupportedContent').removeClass('show');
    })
});


// Scroll to top animated button

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scroll-up').fadeIn();
    } else {
        $('.scroll-up').fadeOut();
    }
});

         // Back to top smooth scroll

         $('button.navbar-toggler').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });


$('.character-list').slick({
    dots: false,
    arrows:true,
    infinite: true,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/character/chevron-back-outline.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/character/chevron-forward-outline.svg'>"
  });
$('.team-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/character/chevron-back-outline.svg'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/character/chevron-forward-outline.svg'>",
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
    ]
  });