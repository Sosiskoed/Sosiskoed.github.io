$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  //Слайдер
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10)
  bullets.css('left', prev.width() + 10)

  //WOW JS for animations
  new WOW().init();

  //Код для анимации
  $(function() {
    var distance_text = $('.control__text').offset().top - $(window).height(),
        distance_form = $('.control__form').offset().top - $(window).height(),
        $text = $('.control__text'),
        $form = $('.control__form');
 
    $(window).scroll(function(){
 
        if  ($(window).scrollTop() > distance_text && $(window).scrollTop() < distance_text + 100)
            $text.addClass('animated');
 
        if  ($(window).scrollTop() > distance_form && $(window).scrollTop() < distance_form + 100)
            $form.addClass('animated');
    });
 
  });

});