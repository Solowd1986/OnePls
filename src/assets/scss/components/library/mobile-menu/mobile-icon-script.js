

$('.mobile-menu__icon').on('click', function () {

    if (($('.mobile-menu__icon').hasClass('mobile-menu__icon--active'))
        ||
        ($('.mobile-menu').css('display') == 'none'))
    {
        $('.mobile-menu__icon').removeClass('mobile-menu__icon--active');
        $('.mobile-menu__list').css('display', 'none');
    } else {
        $('.mobile-menu__icon').addClass('mobile-menu__icon--active');
        $('.mobile-menu__list').css('display', 'flex');
    }
});

$(document).ready(function(){

    if ($('.mobile-menu').css('display') == 'none')
    {
        $('.mobile-menu__icon').removeClass('mobile-menu__icon--active');
        $('.mobile-menu__list').css('display', 'none');
    }
});
