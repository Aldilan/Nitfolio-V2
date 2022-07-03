let swiperBottomScrollbarFull = new Swiper('.swiper', {
  
  loop: true,
  allowTouchMove: true,
  slidesPerView: 'auto',
  grabCursor: true,
  preventClicks: true,
  spaceBetween: 30,
  keyboardControl: true,
  speed: 1000,
  pagination: {
      el: null
  },
  scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      hide: false,
      snapOnRelease: true
  },
  mousewheel: {
      enable: true
  },
  keyboard: {
      enabled: true
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  breakpoints: {
      767: {
          scrollbar: {
              hide: true
          },
          spaceBetween: 0,
          autoHeight: true,
          centeredSlides: false,
          slidesOffsetAfter: 85
      }
  },
});

var swiper2 = new Swiper('.swiper2', {
  loop:true,
  direction:'vertical',
  allowTouchMove: true,
  slidesPerView: 'auto',
  grabCursor: true,
  preventClicks: true,
  spaceBetween: 30,
  keyboardControl: true,
  speed: 500,
  autoHeight: true,
  pagination:  {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  // Enable debugger
  debugger: true,
});