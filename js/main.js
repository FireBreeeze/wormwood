$(function(){

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    // autoplay: true,
    autoplaySpeed: 2000
  });
   

  $('.partners-slider__inner').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 6,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="arrow arrow--prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  });

  $('.reviews-slider__inner').slick({
    dots: true,
    // arrows: true,
    slidesToShow: 3,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<div class="arrow arrow--prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  });

//  $(".menu__link, .header__link, .logo").on("click", function(event){
//         event.preventDefault();
//         var id = $(this).attr('href'),
//         top = $(id).offset().top;
//         $('.header__top').toggleClass('header__top--fixed');
//         $('body,html').animate({scrollTop: top-82}, 3500);
//     });

  $('.menu__button, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link, .header__link, .logo').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#gallery') {
      scrollPoint = scrollPoint - 65;
    } 

    if(scrollAnchor === '#contacts') {
      scrollPoint = scrollPoint - 65;
    }

    $('html, body').animate({scrollTop: scrollPoint}, 3500);
    return false;
  });

  $window = $(window);
  $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

});

var mixer = mixitup('.gallery__content');