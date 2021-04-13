$('.home-image').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $(".arrow-prev"),
    nextArrow: $(".arrow-next"),
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.carousel-product').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $(".fa-chevron-left"),
    nextArrow: $(".fa-chevron-right")
  });