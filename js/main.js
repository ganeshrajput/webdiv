(function($) {
    "use strict";
    $(window).load(function() {
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    $('#pogo-slider').pogoSlider({
        autoplay: true,
        autoplayTimeout: 5000,
        displayProgess: true,
        targetWidth: 1920,
        targetHeight: 750,
        responsive: true,
        pauseOnHover: false,
    }).data('plugin_pogoSlider');
    $(".testimonial-carousel").slick({
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed: 1200,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    $(".team-carousel").slick({
        dots: false,
        arrows: true,
        margin: 30,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }, ]
    });
    $(".brand-carousel").slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 750,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    var filterizd = $('.filtr-container').filterizr({});
    $('.gallery').featherlightGallery({
        gallery: {
            fadeIn: 300,
            fadeOut: 300
        },
        openSpeed: 300,
        closeSpeed: 300
    });
    $('.gallery2').featherlightGallery({
        gallery: {
            next: 'next Â»',
            previous: 'Â« previous'
        },
        variant: 'featherlight-gallery2'
    });
    $('.flickr-gallery').featherlightGallery({
        gallery: {
            fadeIn: 300,
            fadeOut: 300
        },
        openSpeed: 300,
        closeSpeed: 300
    });
    $('.gallery2').featherlightGallery({
        gallery: {
            next: 'next Â»',
            previous: 'Â« previous'
        },
        variant: 'featherlight-gallery2'
    });
    $('.jarallax').jarallax({
        speed: 0.5,
    })
})(window.jQuery);