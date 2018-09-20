$(document).ready(function(){
    $("#owl-slider-caurosal-1").owlCarousel({
        items : 5,
        margin : 30,
        loop : true,
        // autoplay :true,
        autoplayHoverPause:true
		});
		$("#owl-carousel-slider").owlCarousel({
			items : 6,
			margin : 20,
			loop : true,
			// autoplay :true,
			autoplayHoverPause:true
	});
		
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplayHoverPause:true,
			arrows: false,
			// autoplay :true,
			fade: true,
			asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 5,
			asNavFor: '.slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true
		});

		var yourNavigation = $(".second-header-wrapper");
    stickyDiv = "sticky";
    yourHeader = $('.top-header').height();

		$(window).scroll(function() {
			if( $(this).scrollTop() > yourHeader ) {
				yourNavigation.addClass(stickyDiv);
			} else {
				yourNavigation.removeClass(stickyDiv);
			}
		});		
});

