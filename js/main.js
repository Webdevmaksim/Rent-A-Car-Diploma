$(document).ready(function() {

    //First video
    var player;

      $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          width: '100%',
          height: 'auto',
          videoId: 'BkGFhBypWrc',
          events: {
            'onReady': videoPlay,
          }
        });
      });

      function videoPlay(event){
        event.target.playVideo();
      }
      //swiper-player-0
      $('.swiper__play--0').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player-0', {
          width: '100%',
          height: '125%',
          videoId: 'sAyQIjL0DMo',
          events: {
            'onReady': videoPlay,
          }
        });
      });
      //swiper-plaer-1
      $('.swiper__play--1').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player-1', {
          width: '100%',
          height: '125%',
          videoId: '35uUBsRS2Kw',
          events: {
            'onReady': videoPlay,
          }
        });
      });

      //swiper-plaer-3
      $('.swiper__play--3').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player-3', {
          width: '100%',
          height: '125%',
          videoId: '74zyD_ZaZI',
          events: {
            'onReady': videoPlay,
          }
        });
      });

      //swiper-plaer-4
      $('.swiper__play--4').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player-4', {
          width: '100%',
          height: '125%',
          videoId: 'Kb8CW3axqRE',
          events: {
            'onReady': videoPlay,
          }
        });
      });
      
      //slider
      var mySwiper = new Swiper ('.swiper1', {
        // Optional parameters
            loop: true,
            slidesPerView: 2,
            spaceBetween: 100,
            pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 80
            },
          },
      });

      //slider-about the car
      var mySwiper2 = new Swiper ('.swiper2', {
        // Optional parameters
            loop: true,
            pagination: {
            el: '.swiper-pagination2',
            type: 'fraction',
            bulletActiveClass: 'swiper-pagination-bullet-active2',
            currentClass: 'swiper-pagination-current2',
          },
          navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
          },
          // breakpoints: {
          //   // when window width is >= 320px
          //   320: {
          //     slidesPerView: 1,
          //     spaceBetween: 20
          //   },
          //   // when window width is >= 480px
          //   480: {
          //     slidesPerView: 1,
          //     spaceBetween: 30
          //   },
          //   // when window width is >= 640px
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 80
          //   }
          // },
      });
      //footer-slider
      //slider-about the car
      var mySwiper3 = new Swiper ('.swiper3', {
        // Optional parameters
            loop: true,
            pagination: {
            el: '.swiper-pagination3',
            type: 'fraction',
            bulletActiveClass: 'swiper-pagination-bullet-active3',
            currentClass: 'swiper-pagination-current3',
            progressbarOpposite: 'true',
            
          },
          navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            }
          },
      });

      //Кнопка прокрутки наверх
      $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 50) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(function() {
      var link = $('.menu__mobile-link');
      var close = $('.menu__close');
      var menu = $('.menu__m');
    
      link.on('click', function(event) {
        menu.toggleClass('menu__m--active');
      });
    
      close.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('menu__m--active');
      });
    });

        
    //form price set up
    $(function(){
      $('#options').change(function(){
        var tps = 0.20;
       color = $('#options :selected').val();
       color1 = $('#options :selected').val() /100 * 20 +1900 ;
   document.getElementById('result').innerHTML = color;
   document.getElementById('discount' ).innerHTML = color1;
  });
});

//Form
$('.order__form').validate({
  errorClass: "invalid",
  errorElement: "div",
  rules: {
    // Строчное правило
    // Правило-объект(Блок)
    footerPhone: {
      required: true,
      minlength: 18
    },
    footerQuestion: {
      required: false,
      maxlength: 4
    },
  },  //Сообщения
  messages: {
    footerQuestion:{
      required: "Имя обязательно",
      maxlength: "Максимум 4 символа",
    },
    footerPolicy:{
      required: "Лучше согласится !!!"
    },
    footerPhone: "Телефон обязателен",
    minlength: "Телефон не короче 10 цифр",
    
  },
  submitHandler: function(form) {
    // $(form).ajaxSubmit();
    $.ajax({
      type: "POST",
      url: "./php/question.php",
      data: $(form).serialize(),
      success: function (response) {
        // confirm('Форма отправлена, мы свяжемся с вами в ближайшее время.');
        tModal.toggleClass('t-modal--visible');
        $(form)[0].reset();
      },
      error: function(response){
        console.log('Ошибка запроса ' + response);
        ym(64720999, 'reachGoal', 'send'); return true;
      }
    });
  }
});
//phone mask
$('[type=tel]').mask('+7 (000) 000-00-00');
$('.form__promo').mask('0000');

//thank u
var 
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close'),
        //Доп переменные
        //Модальное окно благодарности
        tModal = $('.t-modal'),
        TcloseBtn = $('.t-modal__close');

        TcloseBtn.on('click', function(){
          tModal.removeClass('t-modal--visible');
      });

      $(document).keydown(function(event) { 
        if (event.keyCode == 27) { 
        $('.t-modal').removeClass('t-modal--visible');
        }
        });
        //Закрытие на клик за пределами поля!!!
        $('.t-modal').click(function(e) {
          if ($(e.target).closest('.t-modal__dialog').length == 0){
            $(this).removeClass('t-modal--visible');					
          }
        });
    
});

