const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 600,
    speed: 500,
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: ['-105%', 60, 300],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['105%', 60, 300],
    },
  },  
});