$('.home-slider').slick({
    slidesToShow: 1,
    arrows: true,
    variableWidth: true,

    rtl: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.home-slider__nav',
    responsive: [
        {
            breakpoint: 1320,
            settings: {
                slidesToShow: 1,
                variableWidth: false
            }
        }
    ]
});

$('.construction-progress-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    appendArrows: '.construction-progress-slider__nav'
});

$('.why-slider').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    asNavFor: '.why-content-slider'
});

$('.why-content-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    asNavFor: '.why-slider',
    dots: true,
    appendDots: '.why-content-slider__nav',
    appendArrows: '.why-content-slider__nav',
});

let homeSlider = $('.why-content-slider');

$('.counter-slide__default').text("/ " + homeSlider.slick("getSlick").slideCount);

homeSlider.on('afterChange', function (event, slick, currentSlide) {
    $(".counter-slide__cp").text(currentSlide < 10 ? `${currentSlide + 1}` : currentSlide + 1);
});

$('.plans-slider').slick({
    slidesToShow: 1,
    appendArrows: '.plans-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',

});

$('.list-characteristics').slick({
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    asNavFor: '.plans-slider'
});

$('.variable-project-slider').slick({
    slidesToShow: 1,
    asNavFor: '.variable-nav',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    appendArrows: '.variable-project-slider__nav'
});

$('.variable-nav').slick({
    slidesToShow: 3,
    infinite: false,
    arrows: false,
    vertical: true,
    asNavFor: '.variable-project-slider',
    focusOnSelect: true,
});

$('.courtyard-slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    appendArrows: '.courtyard-slider__nav',
});

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.residential-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    appendArrows: '.residential-slider__nav',
});

$('.residential-nav').slick({
    slidesToShow: 2,
    arrows: false,
    variableWidth: true,
    infinite: false,
    asNavFor: '.residential-slider',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').fadeOut();

        return false;
    });
});

$('[name="phone"]').mask('+7 (999) 999-99-99');

new WOW().init();