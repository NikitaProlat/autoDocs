

$(document).ready(function () {
    var w = $(window).width();
    if (w <= 992) {
        $(document).ready(() => {
            $('.carousel-desktop').slick({
                slidesToShow: 1,
            });
        })
        $(document).ready(function () {
            $('.carousel-desktop.slick-slider').slick({
                slidesToShow: 1,
            });
        });
    } else {
        $(document).ready(() => {
            $('.carousel-desktop').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
            });
        })
        $(document).ready(function () {
            $('.carousel-desktop.slick-slider').slick({
                arrows: false,
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '50px',
                prevArrow: "<img src='https://svgshare.com/i/6Ei.svg' class='prev' alt='1'>",
                nextArrow: "<img src='https://svgshare.com/i/6Gf.svg' class='next' alt='2'>",
            });
        });
    }
});