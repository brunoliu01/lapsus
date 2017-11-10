$(document).ready(function(){
	$(".slideshow").slick({
		infinite: true,
	    dots: true,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 3000
	});

	$(".hamburguer").click(function(){
		$(".navegation-2 ul").toggleClass("trans");
	});
});


