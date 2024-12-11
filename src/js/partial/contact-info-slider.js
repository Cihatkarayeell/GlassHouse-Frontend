var swiper = new Swiper(".mySwiper-contact-info", {
    navigation: {
      nextEl: ".swiper-button-next-contact-info",
      prevEl: ".swiper-button-prev-contact-info",
    },
    slidesPerView: 3.1,
    spaceBetween: 20,
    speed:700,
    loop:true,
    grabCursor:true,
    breakpoints: {
      340: {
        slidesPerView: 1.1,
        spaceBetween: 16,
      },
      440: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      540: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.4,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1440: {
          slidesPerView: 3.2,
          spaceBetween: 30,
        },
      1640: {
          slidesPerView: 3.4,
          spaceBetween: 30,
        },
    },
  });