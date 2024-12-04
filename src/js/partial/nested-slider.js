var swiper = new Swiper(".mySwiper-nested", {
    slidesPerView: 3.5,
    spaceBetween: 0,
    loop:true,
    centeredSlides:true,
    speed:700,
    navigation: {
        nextEl: ".swiper-button-next-nested",
        prevEl: ".swiper-button-prev-nested",
      },
  });