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
      //slider
      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
            loop: true,
            pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    
});