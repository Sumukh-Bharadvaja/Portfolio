;(function($){
    "use strict"
	
	
	var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
	
	
	/*----------------------------------------------------*/
    /*  Parallax Effect js
    /*----------------------------------------------------*/
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();
	
	

    /*  MailChimp Slider
    /*----------------------------------------------------*/
    /*function mailChimp(){
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();
	
	$('select').niceSelect();*/
	
	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    /*$('.imageGallery1 ').simpleLightbox();*/
	
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	
	$(".skill_main").each(function() {
        $(this).waypoint(function() {
            var progressBar = $(".progress-bar");
            progressBar.each(function(indx){
                $(this).css("width", $(this).attr("aria-valuenow") + "%")
            })
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'

        });
    });
	
	/*----------------------------------------------------*/
    /*  Isotope Fillter js
    /*----------------------------------------------------*/
	/*function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
            // Activate isotope in container
			$(".gallery_f_inner").imagesLoaded( function() {
                $(".gallery_f_inner").isotope({
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                }); 
            });
			
            // Add isotope click function
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");

                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
        }
    }
    gallery_isotope();

    (document).ready(function() {
        gallery_isotope(); // Initialize the gallery isotope when document is ready
        // Manually trigger the 'overview' filter if needed
        $('.gallery_filter li[data-filter=".overview"]').click();
    });*/

    function gallery_isotope(){
        if ( $('.gallery_f_inner').length ){
            // Activate isotope in container
            $(".gallery_f_inner").imagesLoaded(function() {
                $(".gallery_f_inner").isotope({
                    itemSelector: '.col-lg-4', // ensure you have an itemSelector that matches your items
                    layoutMode: 'fitRows',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            });
    
            // Add isotope click function
            $(".gallery_filter li").on('click',function(){
                $(".gallery_filter li").removeClass("active");
                $(this).addClass("active");
    
                var selector = $(this).attr("data-filter");
                $(".gallery_f_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });
    
            // Set default filter on page load to '.overview' or change to another default
            $(".gallery_filter li[data-filter='.overview']").click();
        }
    }
    
    $(document).ready(function() {
        gallery_isotope(); // Initialize the gallery isotope when document is ready
    });
    
	
	/*----------------------------------------------------*/
    /*  Testimonials Slider
    /*----------------------------------------------------*/
    /*function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 1500,
                dots:true, 
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 3,
                    },
                }
            })
        }
    }
    testimonials_slider();
	
	$(document).ready(function() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	}); */
	
	
	

})(jQuery)