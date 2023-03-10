$(function(){

  $('.click').click(function () {
    $('.modal__inner').toggleClass('modal__inner--active');
     
  });

// Объявить переменную модального окна в текущей области видимости
var modal = document.getElementById('myModal');
// Переменная кнопки, открывающей модальное окно
var btn = document.getElementById('myBtn');
// Получение элемента <span>, который закрывает модальное окно
var span = document.getElementsByClassName('close')[0];
// Когда пользователь нажимает кнопку, открывается pop-up форма 
btn.onclick = function() {
modal.style.display = 'block';
};
// Когда пользователь нажимает кнопку (x) <span>, закрывается окно формы
span.onclick = function() {
modal.style.display = 'none';
};
// Когда пользователь нажимает в любое место вне формы, закрыть окно формы
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = 'none';
}
};

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
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '20px',
        arrows: false,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '20px',
        arrows: false,
      }
    },
  ],
    prevArrow: '<div class="arrow arrow--prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  });

  $('.reviews-slider__inner').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        dots: false,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        dots: false,
        centerMode: true,
        centerPadding: '20px',
        arrows: false,
      }
    },
  ],
    prevArrow: '<div class="arrow arrow--prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
    nextArrow: '<div class="arrow arrow--next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8L5 12L9 16" stroke="#B2B2B2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
  });

  $('.menu__button, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });

  $('.menu__link, .header__link, .logo, .footer-top__link').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#gallery') {
      scrollPoint = scrollPoint - 135;
    } 
    if(scrollAnchor === '#reviews') {
      scrollPoint = scrollPoint - 135;
    } 
    if(scrollAnchor === '#about') {
      scrollPoint = scrollPoint - 135;
    } 
    if(scrollAnchor === '#news') {
      scrollPoint = scrollPoint - 135;
    } 
    if(scrollAnchor === '#partners') {
      scrollPoint = scrollPoint - 135;
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
