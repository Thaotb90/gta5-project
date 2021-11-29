/*=============================================
    =      Released Game Active 	      =
=============================================*/
$('.character-active').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	dots: true,
	asNavFor: '.character-nav',
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
$('.character-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
    infinite: true,
	asNavFor: '.character-active',
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
				vertical: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
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


