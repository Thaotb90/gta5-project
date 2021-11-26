document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
    
        document.querySelectorAll('.navbar-right .nav-item').forEach(function(everyitem){
    
            everyitem.addEventListener('mouseover', function(e){
    
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.add('show');
                    nextEl.classList.add('show');
                }
    
            });
            everyitem.addEventListener('mouseleave', function(e){
                let el_link = this.querySelector('a[data-bs-toggle]');
    
                if(el_link != null){
                    let nextEl = el_link.nextElementSibling;
                    el_link.classList.remove('show');
                    nextEl.classList.remove('show');
                }
    
    
            })
        });
    
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end

    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:4000,
        speed:2000,
        fade: true,
        cssEase: 'linear',
        edgeFriction:2,
        // prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/images/arrow-back-outline.svg'>",
        // nextArrow:"<img class='a-right control-c next slick-next' src='./assets/images/arrow-forward-outline.svg'>"
      });
    $('.upcoming-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay:true,
        autoplaySpeed:3000,
        speed:700,
        edgeFriction:2,
        prevArrow:"<div class=\"boxed-img\"><img class='a-left control-c prev slick-prev' src='./assets/images/arrow-back-outline.svg'></div>",
        nextArrow:"<div class=\"boxed-img\"><img class='a-right control-c next slick-next' src='./assets/images/arrow-forward-outline.svg'></div>"
      });
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        speed:400,
        centerPadding: '60px',
        edgeFriction:2,
        dots:true,
        prevArrow:"<div class=\"boxed-img\"><img class='a-left control-c prev slick-prev' src='./assets/images/chevron-back-outline.svg'></div>",
        nextArrow:"<div class=\"boxed-img\"><img class='a-right control-c next slick-next' src='./assets/images/chevron-forward-outline.svg'></div>"
      });
    
       /*  Isotope Filter */

    (function() {
        var winDow = $(window);
        var $container = $('.gallery-grid');
        var $filter = $('.filter');

        try {
            $container.imagesLoaded(function() {
                $container.show();
                $container.isotope({
                    filter: '*',
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            });
        } catch (err) {}

        winDow.bind('resize', function() {
            var selector = $filter.find('a.active').attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {}
            return false;
        });

        $filter.find('a').click(function() {
            var selector = $(this).attr('data-filter');

            try {
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
            } catch (err) {

            }
            return false;
        });


    }());

