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

      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      //slider
      var mySwiperContent = new Swiper('.places__swiper-container', {
        // Optional parameters
        slidesPerView: 1,
        loop: true,
        navigation: {
          nextEl: '.places__swiper-button-next',
          prevEl: '.places__swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
        
          // when window width is >= 992px
          992: {
            slidesPerView: 2,
            spaceBetween: 85
          },
          767:{
            slidesPerView: 1,
            spaceBetween: 30
          }
          // when window width is >= 1100px
          // 1100: {
          // 	slidesPerView: 3,
          // 	spaceBetween: 30
          // }
        }
      });

      //slider-about the car
      var mySwiper2 = new Swiper ('.ourCar__slider', {
        // Optional parameters
            loop: true,
            spaceBetween: 1,
          navigation: {
            nextEl: '.ourCar__button--next',
            prevEl: '.ourCar__button--prev',
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
    // Burger
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
       color1 = $('#options :selected').val() /100 * 20 +1900;
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
    footerPhone: {
      required: "Телефон обязателен",
      minlength: "Телефон не короче 10 цифр",
    }, 
    
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
        ym(64720999, 'reachGoal', 'send'); return true;
      },
      error: function(response){
        console.log('Ошибка запроса ' + response);
      }
    });
  }
});
//phone mask
$('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: '+7( __ ) ___-__-__'});
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

