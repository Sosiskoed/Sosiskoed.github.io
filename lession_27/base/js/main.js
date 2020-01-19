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

  var thanks = $('.modal-thanks'),
      thanksCloseBtn = $('.modal-thanks__close');

  thanksCloseBtn.on('click', function () {
    thanks.toggleClass('modal-thanks--visible');
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

  //  Steps swiper - text slider for steps section
  var mySwiper2 = new Swiper ('.steps__swiper-container2', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: '.steps-slide__button-next',
      prevEl: '.steps-slide__button-prev',
    },
    // If we need pagination
    pagination: {
      el: '.steps-slide__pagination2',
      type: 'bullets',
    },
  });

  //  Steps swiper - image slider for steps section
  var mySwiper3 = new Swiper ('.steps__swiper-container3', {
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.steps-slide__pagination3',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.steps-slide__button-next',
      prevEl: '.steps-slide__button-prev',
    },
  });
  // Width between pagination bullets 
  var stepsNext = $('.steps-slide__button-next');
  var stepsPrev = $('.steps-slide__button-prev');
  var stepsBullets = $('.steps-slide__pagination2');

  stepsNext.css('left', stepsPrev.width() + 30 + stepsBullets.width() + 20)
  stepsBullets.css('left', stepsPrev.width() + 17) 

  //WOW JS for animations
  var wow = new WOW(
    {
      mobile: false
    }
  );
  new WOW().init();

//ВАЛИДАЦИЯ
//Модальное окно с благодарностью
$(document).ready(function () {
	// modal__thanks
	var modalThanks = $('.modal-thanks');
	modalThanksClose = $('.modal-thanks__close');

	modalThanksClose.on('click', function () {
	modalThanks.toggleClass('modal-thanks--visible');
  });
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
					modalThanks.toggleClass('modal-thanks--visible');
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
					modalThanks.toggleClass('modal__thanks--visible');
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
					modalThanks.toggleClass('modal-thanks--visible');
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
					modalThanks.toggleClass('modal-thanks--visible');
					$(".modal-thanks__title").text();				
				}
			});
    }
		
  });
}),
  
   // Маска для телефона
   $('[type=tel]').mask('+7 (000) 000-00-00');

   // Создание yandex карты
   ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244734, 39.723227],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
    myMap.behaviors.disable('scrollZoom'); 
});


//ЗАГРУЗЧИК ЯНДЕКС КАРТЫ
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором "map-yandex";
function init () {
  var myMap = new ymaps.Map("map-yandex", {
    center: [47.244734, 39.723227], // координаты центра на карте
    zoom: 9, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Наш офис',
    balloonContent: 'Вход со двора'
  }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.png',
      // Размеры метки.
      iconImageSize: [32, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
  });
  myMap.geoObjects.add(myPlacemark); // помещаем флажок на карту
  myMap.behaviors.disable('scrollZoom'); //Отключаем скролл мышкой
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

//Вставка видео с заглушкой
var playerp;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '465',
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


//Функция удаления hover-эффектов для узких экранов
function windowSize(){
  if ($(window).width() <= '992'){
      $('*:hover').removeClass(':hover');
  }
}
$(window).on('load resize',windowSize);