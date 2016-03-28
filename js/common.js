/*$(document).ready(function(){
	$('.bxslider').bxSlider({
	  infiniteLoop: false,
	  hideControlOnEnd: true
	});
});*/
/*$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 300,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 3,
    slideMargin: 10
  });
});*/
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager: false,
  	//adaptiveHeight: true,
  	slideWidth: 300,
  	auto: true,
  	speed: 900,
    minSlides: 2,
    shrinkItems: true,
    moveSlides: 2,
    maxSlides: 3,
    slideMargin: 10,
  });
    /*$('.main-carousel').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		imagesLoaded: true,
		lazyLoad: true
	});*/

  	/*$('.your-class1').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	variableWidth: true,
    	autoplay: true,
    	responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        }
      }
  	]
 	});*/

	$('.your-class3').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});

  	$('.your-class2').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	dots: true,
    	autoplay: true,
    	autoplaySpeed: 5000,
    	pauseOnHover: true,
    	/*variableWidth: true,
    	autoplay: true,
    	dots: true,*/
    	responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
  		]
 	});
 	$('.your-class1').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	autoplay: true,
    	autoplaySpeed: 5000,
    	pauseOnHover: true,
    	/*variableWidth: true,
    	autoplay: true,
    	dots: true,*/
    	responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
  		]
 	});




});
$(function() {

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
