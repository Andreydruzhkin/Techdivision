"use strict";

// константа постоянна, 
var swiper = new Swiper('.client-swiper', {
  // Optional parameters - параметры, slidesPerView: 5 - означает сколько слайдов одновременно на экране, loop: true - означает бесконечный слайдер
  slidesPerView: 5,
  loop: true,
  // это для того чтобы при сжимании кол-во слайдов уменьшалось
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 4
    }
  },
  // If we need pagination - точки под слайдером 
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows - стрелки налево направо
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); //  $ - этот значек обозначает какой-то элемент
// ".scroll-btn" - это класс к которому применяем
// .click(function() - это обозначение функции
// () - обозначает что функция рабочая
// $("html, body") - к этим элементам будет применяться
// .animate - это анимация
// ({scrollTop: 0}, 300) - Top c большой буквы, 
// 300 - скорость аннимации

$(".scroll-btn").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 300);
});