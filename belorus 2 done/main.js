
           // language-select
$('.header__select').click(function(){
$(this).toggleClass('open');

})

$('.header__select li').click(function(){
var setLang = $('.header__select').data('location'),
    dataLangSelect = $(this).data('lang')  
      $('.header__select').data('location', dataLangSelect);
      $('.header__select li').removeClass('active');
      $(this).toggleClass('active');


})
			
$(document).ready(function(){

			// Main slider
	$(".slider__main").slick({
		arrows:true,
		prevArrow: '.prev-arrow',
        nextArrow: '.next-arrow',
        autoplay:false,
        autoplaySpeed:5000
        
		  
	});

	$(".slider__clients").slick({
		arrows:true,
		autoplay:true,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint:800,
				settings:{
					dots:true,
					arrows:false,
				},
			},

		],
		
	});

	$(".reviews__slider").slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
		slidesToScroll:2,
		autoplay:true,
		autoplaySpeed:5000,
		responsive: [
			{
	    		breakpoint: 1025,
	    		settings:{
	    			slidesToShow:2,
	    			arrows:false,

	    		},
	  		},
	  		{
	    		breakpoint: 800,
	    		settings:{
	    			slidesToShow:1,
	    			arrows:false,
	    		},
	  		},
  		],
		
	});
})




