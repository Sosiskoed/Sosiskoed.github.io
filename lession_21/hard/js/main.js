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
});

//Code for button to top
var btnToTop = $('#to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnToTop.addClass('show');
  } else {
    btnToTop.removeClass('show');
  }
});

btnToTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
