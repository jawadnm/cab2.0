/*-----------------------------------------------------------------

Template Name: Techtro - Software and Digital Agency Html Template 
Author:  Qzency
Author URI: https://themeforest.net/user/qzency/portfolio
Version: 1.0.0
Description: Techtro - Software and Digital Agency Html Template <

-------------------------------------------------------------------
CSS TABLE OF CONTENTS
-------------------------------------------------------------------

01. header
02. animated text with swiper slider
03. magnificPopup
04. counter up
05. wow animation
06. nice select
07. scrolldown
08. hover active js
09. swiper slider
10. range sliger
11. quantity
12. quantity cart
13. search popup
14. mousecursor 
15. preloader 


------------------------------------------------------------------*/

(function($) {
    "use strict";

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });
        
        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        //>> Scrolldown Start <<//
        $("#scrollDown").on("click", function () {
            setTimeout(function () {
                $("html, body").animate({ scrollTop: "+=1000px" }, "slow");
            }, 1000);
        });

        //>> Testimonial Slider Start <<//
        if($('.testimonial-slider').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }
 

        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                effect: 'fade', // Add fade effect here
                fadeEffect: {
                    crossFade: true, // Optional for smoother fade
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
            });
        }
        
        if($('.testimonial-slider-3').length > 0) {
            const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 2.8,
                    },
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-slider-4').length > 0) {
            const testimonialSlider3 = new Swiper(".testimonial-slider-4", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                effect: 'fade', // Add fade effect here
                fadeEffect: {
                    crossFade: true, // Optional for smoother fade
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: { 
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Text Animation Gsap Js Start <<//
		if ($('.title-anim').length > 0) {
			let splitTitleLines = gsap.utils.toArray(".title-anim");
			splitTitleLines.forEach(splitTextLine => {
				const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
				});
	
				const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
				gsap.set(splitTextLine, { perspective: 300});
				itemSplitted.split({ type: "lines" })
				tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -50, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
			});	
		}

         //>> Back To Top Slider Start <<//
         $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        $("#back-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });
        

    }); // End Document Ready Function

    // function loader() {
    //     $(window).on('load', function() {
    //         // Animate loader off screen
    //         $(".preloader").addClass('loaded');                    
    //         $(".preloader").delay(600).fadeOut();                       
    //     });
    // }

    // loader();
   

})(jQuery); // End jQuery

