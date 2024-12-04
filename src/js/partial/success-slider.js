var swiper = new Swiper(".mySwiper-success", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop:true,
    speed:700,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next-success",
      prevEl: ".swiper-button-prev-success",
    },
  });