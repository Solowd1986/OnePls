

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        lazyLoad:true,

        loop:false,
        autoplay:false,

        autoplayTimeout:2000,
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInRight',
        dotsEach: true
    });
});
