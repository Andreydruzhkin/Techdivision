"use strict";

var swiper = new Swiper('.client-swiper', {
  slidesPerView: 5,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 3
    },
    640: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 4
    }
  },
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
$(".scroll-btn").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 300);
});