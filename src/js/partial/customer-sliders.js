var swiper = new Swiper(".mySwiper-top-left", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});

var swiper = new Swiper(".mySwiper-bottom-left", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  effect: "fade",
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});

var swiper = new Swiper(".mySwiper-top-right", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop:true,
  centeredSlides: true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});
var swiper = new Swiper(".mySwiper-bottom-right", {
  slidesPerView: 6,
  spaceBetween: 0,
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});
