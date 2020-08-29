(function($) {
	
	"use strict";
	
	
	//  Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(500).fadeOut(500);
		}
	}
		

	//  Submenu Dropdown Toggle
	function DropdownToggole () {
		if($('.main-header li.dropdown ul').length){
			$('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');
			
			//Dropdown Button
			$('.main-header li.dropdown .dropdown-btn').on('click', function() {
				$(this).prev('ul').slideToggle(500);
			});
		}
	}
		

	//  Update Header Style + Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var topHeader = $('.mainmenu-area').innerHeight();
			var windowpos = $(window).scrollTop();
			if (windowpos >= topHeader) {
				$('.scroll-to-top').fadeIn(300);
			} else {
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
    

	//  revolution slider
	function revolutionSliderActiver () {
		if ($('.rev_slider_wrapper #slider1').length) {
			$("#slider1").revolution({
				sliderType:"standard",
				sliderLayout:"auto",
				delay:5000,
				navigation: {
					arrows:{enable:true} 
				},
				gridheight:900, 
				gridwidth:1170 
			});
		};
	}



	//  team carousel
	function teamCarousel () {
		if ($('.team-carousel').length) {
			$('.team-carousel').owlCarousel({
			    loop: true,
			    margin: 32,
			    nav: true,
			    dots: false,
			    autoplay:true,
			    autoplayHoverPause:true,
			    responsive: {
			        0:{
			            items:1,
			            loop:true
			        },
			        480:{
						items:2,
						loop:true
					},
			        768:{
			            items:3,
			            loop:true
			        },
			        1000:{
			            items:4,
			            loop:true
			        }
			    }
			});
		};
	}
	// ticket carousel
	function testimonialCarousel () {
		if ($('.testimonial-carousel').length) {
			$('.testimonial-carousel').owlCarousel({
			    loop: true,
			    margin: 60,
			    nav: false,
			    dots: true,
			    autoplay:true,
			    responsive: {
			        0:{
			            items:1,
			            loop:true,
						dots:false
			        },
			        480:{
						items:1,
						loop:true,
						dots:false
					},
			        768:{
			            items:2,
			            loop:true,
						dots:false
			        },
			        1000:{
			            items:3,
			            loop:true
			        }
			    }
			});
		};
	}

	//  LightBox / Fancybox
	function LightBox () {
		if($('.lightbox-image').length) {
			$('.lightbox-image').fancybox();
		}
	}


    //  masonary
	function masonarygallery () {
		if ($('.masonary-gallery').length) {
			$('.masonary-gallery').isotope({
				layoutMode:'masonry'
			});
		}
	}





    //  stickyHeader
	function stickyHeader () {
		if ($('.stricky').length) {
			var strickyScrollPos = 100;
			if($(window).scrollTop() > strickyScrollPos) {
				$('.stricky').removeClass('fadeIn animated');
		      	$('.stricky').addClass('stricky-fixed fadeInDown animated');
			}
			else if($(this).scrollTop() <= strickyScrollPos) {
				$('.stricky').removeClass('stricky-fixed fadeInDown animated');
		      	$('.stricky').addClass('slideIn animated');
			}
		};
	}



	//  contact form validation
	function contactFormValidation () {
		if($('.contact-form').length){
			$('.contact-form').validate({ // initialize the plugin
				rules: {
					username: {
						required: true
					},
					lastname: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					phone: {
						required: true
					},
					message: {
						required: true
					},
					date: {
						required: true
					},
					time: {
						required: true
					},
					select: {
						required: true
					},
					state: {
						required: true
					},
					zip: {
						required: true
					},
					website: {
						required: true
					}
				},
				submitHandler: function (form) { 
					// sending value with ajax request
					var form = $(form);
					$.post(form.attr('action'), form.serialize(), function (response) {
						form.parent('div').append(response);
						form.find('input[type="text"]').val('');
						form.find('input[type="email"]').val('');
						form.find('textarea').val('');
					});
					return false;
				}
			});
		}



	}

	
	//  Fact Counter
	function factCounter() {
		if($('.fact-counter').length){
			$('.fact-counter .column.animated').each(function() {
		
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);
					
				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text()
					}).animate({
						countNum: n
					}, {
						duration: r,
						easing: "linear",
						step: function() {
							$t.find(".count-text").text(Math.floor(this.countNum));
						},
						complete: function() {
							$t.find(".count-text").text(this.countNum);
						}
					});
				}
				
			});
		}
	}


 	//  product-description section 
    function customTabscheduleTab () {
        if ($('#schedule-tab .schedule-tab-title').length) {
            var tabWrap = $('#schedule-tab .schedule-tab-content');
            var tabClicker = $('#schedule-tab .schedule-tab-title tr td');
            
            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#'+ tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div'+id).fadeIn('500');
                return false;
            });        
        }
    }



	// product-description section
	// var d = new Date(new Date().getTime() + 360 * 100 * 100 * 2000);
  var d = new Date(2020,9,6,9-3,0,0,0);
	    // default example
	    simplyCountdown('.simply-countdown-one', {
	        year: d.getFullYear(),
	        month: d.getMonth() + 1,
          day: d.getDate(),
          hours: d.getHours()
	    });




	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}



		
	// Scroll to top
	if($('.scroll-to-top').length){
		$(".scroll-to-top").on('click', function() {
		   // animate
		   $('html, body').animate({
			   scrollTop: $('html, body').offset().top
			 }, 1000);
	
		});
	}


	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}



//scroll reveal=============================



/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
	$(document).on('ready', function() {
		DropdownToggole();
		revolutionSliderActiver();
		teamCarousel();
		LightBox();
		masonarygallery();
		contactFormValidation();
		testimonialCarousel();
		customTabscheduleTab();
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	$(window).on('scroll', function() {
		stickyHeader();
		headerStyle();
		factCounter();
		
	});
	
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});
	

})(window.jQuery);