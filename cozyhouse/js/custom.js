$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    });


});

$(function () {
    const MMS = new Swiper('.main_menu_slide', {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

});


$(function () {
    const MIS = new Swiper('.main_interior_slide', {
        loop: true,

        navigation: {
            nextEl: '.main_interior .inner .itm_area .arrows .next',
            prevEl: '.main_interior .inner .itm_area .arrows .prev',
        },
        pagination: {
            clickable: true,
            el: '.main_interior .inner .itm_area .page',
        },

        on: {
            slideChangeTransitionStart: function () {
                console.log(this.realIndex);
                $('.main_interior .inner .desc_area .itm').removeClass('on');
                $('.main_interior .inner .desc_area .itm').eq(this.realIndex).addClass('on');
            }
        }
    })
});


$(function () {
    const MSS = new Swiper('.main_sns_slide', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 8,
        centeredSlides: true,
    })
});

$(function () {
    AOS.init();
})