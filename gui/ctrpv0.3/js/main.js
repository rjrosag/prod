/* First slider */
$(".slider-one")
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".side-slider .slider-btn .prev",
    nextArrow:".side-slider .slider-btn .next"
});


/* Second slider */
$(".slider-two")
.not(".slick-initialized")
.slick({
    prevArrow:".side-slider-two .prev",
    nextArrow:".side-slider-two .next",
    slidesToShow:5,
    slidesToScroll:1,
    autoplaySpeed:3000
});
