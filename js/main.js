$(function(){

    $('.reviews__slider').slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1141,
        //         settings: {
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 846,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     },
        //     {
        //         breakpoint: 585,
        //         settings: {
        //             slidesToShow: 1
        //         }
        //     },
        // ]

    })

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');

    });
});
