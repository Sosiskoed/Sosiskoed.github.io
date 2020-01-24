$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
  });

  var thanks = $('.modal-thanks'),
      thanksCloseBtn = $('.modal-thanks__close');

  thanksCloseBtn.on('click', function () {
    thanks.removeClass('modal-thanks--visible');
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

  next.css('left', prev.width() + 20 + bullets.width()+10)
  bullets.css('left', prev.width() + 20)

//ВАЛИДАЦИЯ
//Модальное окно с благодарностью
$(document).ready(function () {
//Форма в модальном окне
	$('.modal__form').validate({
    errorClass: "invalid",
    errorElement: 'div',
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			userPhone: {
				required: true,
				minlength: 18
			},
			userEmail: {
				required: true,
				email: true
			},
			modalPolicyCheckbox: {
				required: true
			}
		}, //сообщения
		messages: {
			userName: {
				required: "Заполните поле",
				minlength: "Имя должно быть не короче двух букв",
				maxlength: "Имя должно содержать не более 15 букв"
			}, 
			userPhone: {
				required: "Заполните поле",
				minlength: "Введите ваш номер полностью"
			},
			userEmail: {
				required: "Заполните поле",
				email: "Введите корректный email"
			},
			modalPolicyCheckbox: {
				required: "Соглашение является обязательным"
			}
		},
		errorPlacement: function (error, element) {
			if (element.attr("type") == "checkbox") {
				return element.next('label').append(error);
			}
		
			 error.insertAfter($(element));
		},
		//AJAX
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(form).serialize(),
				success: function (response) {
					console.log('Ajax сработал. Ответ сервера: ' + response);
					$(form)[0].reset();
					modal.removeClass('modal--visible')
					thanks.addClass('modal-thanks--visible');
					$(".modal-thanks__title").text();
					ym('56934187', 'reachGoal', 'form'); return true;			
				}
			});
		}   
	});
	
//Форма в блоке контроля
	$('.control__form').validate({
    errorClass: "invalid",
    errorElement: 'div',
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			userPhone: {
				required: true,
				minlength: 18
			},
			controlPolicyCheckbox: {
				required: true
			}
		},
		messages: {
			userName: {
				required: "Заполните поле",
				minlength: "Имя должно быть не короче двух букв",
				maxlength: "Имя должно содержать не более 15 букв"
			}, 
			userPhone: {
				required: "Заполните поле",
				minlength: "Введите ваш номер полностью"
			},
			controlPolicyCheckbox: {
				required: "Соглашение является обязательным"
			}			
		},
		errorPlacement: function (error, element) {
			if (element.attr("type") == "checkbox") {
				return element.next('label').append(error);
			}
		
			 error.insertAfter($(element));
		},
			//AJAX
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(form).serialize(),
				success: function (response) {
					console.log('Ajax сработал. Ответ сервера: ' + response);
					$(form)[0].reset();
					modal.removeClass('modal--visible')
					thanks.addClass('modal-thanks--visible');
					$(".modal__thanks__title").text();
					ym('56983390', 'reachGoal', 'back call'); return true;			
				}
			});
		}   
  });
	//Форма в блоке преимуществ
	$('.advantages__form').validate({
    errorClass: "invalid",
    errorElement: 'div',
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			userPhone: {
				required: true,
				minlength: 18
			},
			userQuestion: "required",
			advantagesPolicyCheckbox: {
				required: true
			}
		},
		messages: {
			userName: {
				required: "Заполните поле",
				minlength: "Имя должно быть не короче двух букв",
				maxlength: "Имя должно содержать не более 15 букв"
			}, 
			userPhone: {
				required: "Заполните поле",
				minlength: "Введите ваш номер полностью"
			},
			userQuestion: "Введите ваш вопрос",
			advantagesPolicyCheckbox: {
				required: "Соглашение является обязательным"
			}
		},
		errorPlacement: function (error, element) {
			if (element.attr("type") == "checkbox") {
				return element.next('label').append(error);
			}
		
			 error.insertAfter($(element));
		},
			//AJAX
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(form).serialize(),
				success: function (response) {
					console.log('Ajax сработал. Ответ сервера: ' + response);
					$(form)[0].reset();
					modal.removeClass('modal--visible')
					thanks.addClass('modal-thanks--visible');
					$(".modal-thanks__title").text();				
				}
			});
    }
		
  });
	//Форма в футере
	$('.footer__form').validate({
    errorClass: "invalid",
    errorElement: 'div',
		rules: {
			userName: {
				required: true,
				minlength: 2,
				maxlength: 15
			},
			userPhone: {
				required: true,
				minlength: 18
			},
			userQuestion: "required",
			footerPolicyCheckbox: {
				required: true
			}
		},
		messages: {
			userName: {
				required: "Заполните поле",
				minlength: "Имя должно быть не короче двух букв",
				maxlength: "Имя должно содержать не более 15 букв"
			}, 
			userPhone: {
				required: "Заполните поле",
				minlength: "Введите ваш номер полностью"
			},
			userQuestion: "Введите ваш вопрос",
			footerPolicyCheckbox: {
				required: "Соглашение является обязательным"
			}
		},
		errorPlacement: function (error, element) {
			if (element.attr("type") == "checkbox") {
				return element.next('label').append(error);
			}
		
			 error.insertAfter($(element));
		},
			//AJAX
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(form).serialize(),
				success: function (response) {
					console.log('Ajax сработал. Ответ сервера: ' + response);
					$(form)[0].reset();
					modal.removeClass('modal--visible')
					thanks.addClass('modal-thanks--visible');
					$(".modal-thanks__title").text();				
				}
			});
    }
		
  });
}),
  
   // Маска для телефона
   $('[type=tel]').mask('+7 (000) 000-00-00');

//Загрузчик карт
var addmap = false;

$(window).scroll(function () {
	var el = $('#map')
	if ($(this).scrollTop() > el.offset().top - 800) {
		if (addmap) return;
		addmap = true;
		var script = document.createElement('script');
		script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A4b3e137b4e23b4bf2821393ec46e1e0e7e0dcbec3750bec6a64540ae84cde6ac&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false";
		el.append(script);
	};
});

//Вставка видео с заглушкой
var playerp;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'RHzzLqJWqHs',
    events: {
      'onReady': videoPlay,
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}

//Скрипт плавной прокрутки к якорю
$(document).ready(function(){
  $('a[href^="#"], *[data-href^="#"]').on('click', function(e){
      e.preventDefault();
      var t = 1000;
      var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
      $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
  });
});

});


//Функция исправления Hover на мобильных. С ней первый же клик запускает кнопку/ссылку и тд, а не активирует ховер-эффект
$('body').on('touchstart', function() {});