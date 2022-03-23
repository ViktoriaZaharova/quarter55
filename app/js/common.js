$('.home-slider').slick({
    slidesToShow: 1,
    arrows: true,
    variableWidth: true,
    infinite: false,
    rtl: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    appendArrows: '.home-slider__nav'
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

homeSlider.on('afterChange', function(event, slick, currentSlide){
    $(".counter-slide__cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
});

$('.plans-slider').slick({
    slidesToShow: 1,
    appendArrows: '.plans-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
});

$('.variable-project-slider').slick({
    slidesToShow: 1,
    asNavFor: '.variable-project-review',
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
});

$('.variable-project-review').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.variable-project-slider',
});

$('.courtyard-slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-right.png" alt=""></button>',
    appendArrows: '.courtyard-slider__nav',
});