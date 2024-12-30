$(function () {

    $('.main_container').fullpage({
        afterLoad: function (o, ds) {
            let idx = ds.index;

            if (idx == 1) {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    });

});


$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
})