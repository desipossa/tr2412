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
});


$(function () {
    const mcs1 = new Swiper('.main_center_slide01', {
        loop: true
    });
    const mcs2 = new Swiper('.main_center_slide02', {
        loop: true
    });


    $('.main_center .tabcon_all_menu a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();


        $('.main_center .tabcon_all_menu a').removeClass('on');
        $(this).addClass('on');


        $('.main_center .tabcon_wrap .tabcon').removeClass('on');
        $('.main_center .tabcon_wrap .tabcon').eq(idx).addClass('on');
    })


    $('.main_center .tabcon_menu01 a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();

        $('.main_center .tabcon_menu01 a').removeClass('on');
        $(this).addClass('on');

        mcs1.slideToLoop(idx);
    });
    $('.main_center .tabcon_menu02 a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();

        $('.main_center .tabcon_menu02 a').removeClass('on');
        $(this).addClass('on');

        mcs2.slideToLoop(idx)
    });
})