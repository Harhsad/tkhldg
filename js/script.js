// JavaScript Document
$( document ).ready(function() {
$('.clientslider').owlCarousel({
    loop:false,
	dots:false,
	autoplay:true,
	mouseDrag:false,
	dotsEach:true,
	responsive:{
        0:{
            items:2,
			margin:10,
			nav:false
        },
        600:{
            items:3,
			margin:10,
			nav:false
        },
        1000:{
            items:5,
			margin:10,
			nav:false
        },
		1200:{
            items:7,
			margin:20,
			nav:false
        }
		}
})
});