(function($) {
    'use strict';

// Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    }); 
    
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });

    // Loder  //
    $(function () {
      $('body').addClass('loaded');
    });
    
     // brand  //
$('.brand_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav: false,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
             1365: {
                items: 4
            },
             1500: {
                items: 5
            },
            1920: {
                items: 5  
              }
        }
    });

         // testi //
$('.testi_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav: true,
        navText: ["<i class='flaticon-left-arrow-3''></i>", "<i class='flaticon-right-arrow-3''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
             1365: {
                items: 1
            },
             1500: {
                items: 1
            },
            1920: {
                items: 1 
              }
        }
    });
    
             // testi //
$('.testi2_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
             1365: {
                items: 1
            },
             1500: {
                items: 1
            },
            1920: {
                items: 1 
              }
        }
    });
    
                // testi //
$('.team3_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav:true,
        navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1000: {
                items: 2
            },
             1365: {
                items: 3
            },
             1500: {
                items: 3
            },
            1920: {
                items: 3 
              }
        }
    });
    
            // team  //
$('.team_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav:false,
        navText: ["<i class='flaticon-left-arrow-3''></i>", "<i class='flaticon-right-arrow-3''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
             1365: {
                items: 4
            },
             1600: {
                items: 5
            },
            1920: {
                items: 5 
              }
        }
    });
                // team  //
$('.team_list2').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav:false,
        navText: ["<i class='flaticon-left-arrow-3''></i>", "<i class='flaticon-right-arrow-3''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
             1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3 
              }
        }
    });
     // team  //
$('.blog_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav:true,
        navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
             1365: {
                items: 3
            },
             1600: {
                items: 3
            },
            1920: {
                items: 3 
              }
        }
    });
    
         // team  //
$('.service_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:2500,
        autoplayTimeout:4000,
        dots:false,
        nav:true,
        navText: ["<i class='fas fa-arrow-left''></i>", "<i class='fas fa-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            },
             1365: {
                items: 3
            },
             1600: {
                items: 4
            },
            1920: {
                items: 4 
              }
        }
    });


	 // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

// sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });

            //Header Search
        if($('.search-box-outer').length) {
            $('.search-box-outer').on('click', function() {
                $('body').addClass('search-active');
            });
            $('.close-search').on('click', function() {
                $('body').removeClass('search-active');
            });
        }
  
})(jQuery);

 