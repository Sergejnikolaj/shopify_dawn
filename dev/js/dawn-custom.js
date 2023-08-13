document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  





  $(".dawn-temp-json .dawn-feat-coll-wrap ul").each(function () {
    const slider = $(this);
    const slidesQty = slider.parent().data("slider-slides");
    const slidesToScroll = slider.parent().data("slider-scroll");
    const sliderDots = slider.parent().data("slider-dots");


    console.log('AAA slider.parent === ',slider.parent());
    //data-slide-qty="3"
    console.log('AAA slider.parent data === ',slider.parent().data("slide-qty"));

    slider.slick({
        autoplay: false,
        arrows: true,
        infinite: false,
        slidesToShow: slidesQty,
        slidesToScroll: slidesToScroll,
        prevArrow: slider.parent().find('.dawn-slick-prev'),
        nextArrow: slider.parent().find('.dawn-slick-next'),
        dots: true,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    });
});











  //landingGulpSlider();


});