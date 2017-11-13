
//este código es para hacer el slider con slick
$(document).ready(function(){
	$(".slideshow").slick({
		infinite: true,
	    dots: true,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 3000
	});
//este script sirve para hacer el menu hamburguesa
//"hamburguer" es el ícono al que le daré clic y "navegation-2 ul" es a lo que le daré la nueva clase "trans"
	$(".hamburguer").click(function(){
		$(".navegation-2 ul").toggleClass("trans");
	});
});


 $('.serviciosSection').click(function(){
    $("html, body").animate({ scrollTop: $('.cont-slider').height() - 78 }, 600);

});