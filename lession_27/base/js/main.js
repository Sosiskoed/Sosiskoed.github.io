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
  new WOW().init();

  //Валидация формы модального окна
  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
      }
    },
    // Сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательо укажите email",
        email: "Введите в формате: name@domain.com",
      }
    },
    //AJAX
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          thanks.addClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        },
      });
    }
   });

   //Валидация формы в блоке преимуществ
  $('.advantages__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // Строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
      }
    },
    // Сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обязательо укажите email",
        email: "Введите в формате: name@domain.com",
      }
    },
    //AJAX
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          thanks.addClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        },
      });
    }
   });

 //Валидация формы блока контроля
 $('.control__form').validate({
  errorClass: "invalid",
  errorElement: "div",
  rules: {
    // Строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: "required",
  },
  // Сообщения
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче двух букв",
      maxlength: "Имя не длиннее пятнадцати букв"
    },
    userPhone: "Телефон обязателен",
  },
  //AJAX
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        $(form)[0].reset();
        modal.removeClass('modal--visible');
        thanks.addClass('modal-thanks--visible');
      },
      error: function(response) {
        console.error('Ошибка запроса ' + response);
      },
    });
  }
 });

     //Валидация формы футера
  $('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {

      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      userQuestion: "required"
    },

    // Сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длиннее пятнадцати букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: "Обязательно напишите ваш вопрос"
    },
    //AJAX
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          thanks.addClass('modal-thanks--visible');
        },
        error: function(response) {
          console.error('Ошибка запроса ' + response);
        },
      });
    }
   });

   // Маска для телефона
   $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

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
 
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
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

});