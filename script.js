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
      translate: ['-105%', 80, 300],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['105%', 80, 300],
    },
  },
});

const buttonWrapper = document.querySelector('.burger-button')
const menu = document.querySelector('.burger-menu')
const burger_line1 = document.querySelector('.line-1')
const burger_line3 = document.querySelector('.line-3')
buttonWrapper.addEventListener('click', () => {
    menu.classList.toggle('margin')
    buttonWrapper.classList.toggle('rotate')
    burger_line1.classList.toggle('opacity0')
    burger_line3.classList.toggle('rotate90')
})

const link = document.querySelectorAll('.burger-link')

link.forEach(element => {
  element.addEventListener('click', () => {
    menu.classList.toggle('margin')
    buttonWrapper.classList.toggle('rotate')
    burger_line1.classList.toggle('opacity0')
    burger_line3.classList.toggle('rotate90')
  })
});