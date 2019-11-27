$(document).ready(function(){
	$('.header-slider').slick({
		dots: true,
		arrows: false,
		draggable: false,
		// adaptiveHeight: true
	})

	$('.blog-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		dots: true,
		arrows: false
	})

	$('.gallery-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 5,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5
				}
			},
			{
				breakpoint: 921,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 792,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
		]
	})
})



	
