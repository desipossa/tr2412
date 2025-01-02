$(function () {

    $('.main_container').fullpage({
        anchors: ['intro', 'service', 'center', 'news', 'video', 'customer'],
        scrollOverflow: false,
        afterLoad: function (o, ds) {
            let idx = ds.index;

            $('.section').removeClass('on');
            $('.section').eq(idx).addClass('on');

            $('.menu_lnk ul li').removeClass('on');
            $('.menu_lnk ul li').eq(idx).addClass('on');

            if (idx == 2) {
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