$(function () {


    $('.main_visual_slide').slick({
        dots: true,
        //fade: true,
        //vertical: true,
    });


    $('.main_solution_slide').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.main_solution .arrows .prev').on('click', function () {
        $('.main_solution_slide').slick('slickPrev')
    });
    $('.main_solution .arrows .next').on('click', function () {
        $('.main_solution_slide').slick('slickNext')
    });


    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })


})