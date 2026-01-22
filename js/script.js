var $page = $('html, body');
$('a[href="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$('button[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$(document).ready(function () {
    var w = $(window).width();
    if (w <= 768) {
        $('.carousel__slide img').attr('data-bs-toggle', 'modal');
        $('.carousel__slide img').attr('type', 'button');
    }
});