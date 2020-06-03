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
          //     slidesPerView: 1,
          //     spaceBetween: 40
          //   }
          // },
      });
});