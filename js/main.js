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

      

      //swiper-player-0
      $('.swiper__play--1').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player__1', {
          width: '100%',
          height: '150%',
          videoId: 'sAyQIjL0DMo',
          events: {
            'onReady': videoPlay,
          }
        });
      });
      //swiper-plaer-1
      $('.swiper__play--2').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player__2', {
          width: '100%',
          height: '200%',
          videoId: '35uUBsRS2Kw',
          events: {
            'onReady': videoPlay,
          }
        });
      });
      //swiper-plaer-2
      $('.swiper__play--3').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player__3', {
          width: '100%',
          height: '125%',
          videoId: 'H8i8Ewls_Fs',
          events: {
            'onReady': videoPlay,
          }
        });
      });
      //swiper-plaer-3
      $('.swiper__play--4').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player__4', {
          width: '100%',
          height: '125%',
          videoId: 'ETUF4Iu0MkQ',
          events: {
            'onReady': videoPlay,
          }
        });
      });
      
      function videoPlay(event){
        event.target.playVideo();
      }

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      //slider
      var mySwiperContent = new Swiper('.places__swiper-container', {
        // Optional parameters
        slidesPerView: 2,
        loop: false,
        navigation: {
          nextEl: '.places__swiper-button-next',
          prevEl: '.places__swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 570px
          580: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          // when window width is >= 768px
          850: {
            slidesPerView: 3,
            spaceBetween: 25
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 2,
            spaceBetween: 85
          },
          // when window width is >= 1100px
          // 1100: {
          // 	slidesPerView: 3,
          // 	spaceBetween: 30
          // }
        }
      });

      //slider-about the car
      var mySwiper2 = new Swiper ('.swiper2', {
        // Optional parameters
            loop: true,
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
      //Обратный отчёт для страниц
      function addOne(n) {
        return n > 10 ? n : (+n > 0) ? "0" + n : n;
      }
      var swiper3Current = $('.swiper3__current');
	    var swiper3Total = $('.swiper3__total');

	      mySwiper3.on('slideChange', function () {
		      swiper3Current.text(addOne(mySwiper3.realIndex + 1));
		      swiper3Total.text(addOne(mySwiper3.slides.length - 2));
	      });

	      swiper3Current.text(addOne(mySwiper3.realIndex + 1));
        swiper3Total.text(addOne(mySwiper3.slides.length - 2));

        var swiper2Current = $('.swiper2__current');
	      var swiper2Total = $('.swiper2__total');

	      mySwiper2.on('slideChange', function () {
		      swiper2Current.text(addOne(mySwiper2.realIndex + 1));
		      swiper2Total.text(addOne(mySwiper2.slides.length - 2));
	      });

	      swiper2Current.text(addOne(mySwiper2.realIndex + 1));
        swiper2Total.text(addOne(mySwiper2.slides.length - 2));
        



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

