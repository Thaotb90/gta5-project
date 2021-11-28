/*=============================================
    =      Released Game Active 	      =
=============================================*/
$('.team-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: true,
	asNavFor: '.team-nav',
	responsive: [
		{
			breakpoint: 767,
			settings: {
				arrows: false,
				dots: false,
			}
		},
	]
});
$('.team-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
    infinite: true,
	asNavFor: '.team-active',
	dots: false,
	arrows: false,
	centerMode: true,
	centerPadding: '0px',
	vertical: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				vertical: false,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				vertical: false,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				vertical: false,
			}
		},
	]
});


