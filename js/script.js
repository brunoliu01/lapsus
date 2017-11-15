
//este código es para hacer el slider con slick

$(document).ready(function(){
	$(".slideshow").slick({
		infinite: true,
	    dots: true,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 3000
	});
	var a = $('.cont-slider').height();
//este script sirve para hacer el menu hamburguesa
//"hamburguer" es el ícono al que le daré clic y "navegation-2 ul" es a lo que le daré la nueva clase "trans"
	$(".hamburguer").click(function(){
		$(".navegation-2 ul").toggleClass("trans");
	});

	$('.novedades-section').click(function(){
		$("html,body").animate({scrollTop: a + $('.serv').height() + $('.section-1').height()  +$('.parallax').height() + $('.enfoque-text').height() + $('.enfoque').height() -78 },600);
	});

	$('.serviciosSection').click(function(){
    	$("html, body").animate({ scrollTop: a - 78 }, 600);
	});

	$('.client-section').click(function(){
	    $("html,body").animate({scrollTop: a + $('.serv').height() + $('.section-1').height()  +$('.parallax').height() + $('.enfoque-text').height() + $('.enfoque').height() + $('.nov-section').height() -78 },600);
	});

	$('.contacto-section').click(function(){
	    $("html,body").animate({scrollTop: a + $('.serv').height() + $('.section-1').height()  +$('.parallax').height() + $('.enfoque-text').height() + $('.enfoque').height() + $('.nov-section').height() + $('.client-text').height() + $('.clientes').height() -78 },600);
	});

});