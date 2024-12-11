var swiper = new Swiper(".mySwiper-pdf", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop:true,
    speed:700,
    navigation: {
      nextEl: ".swiper-button-next-pdf",
      prevEl: ".swiper-button-prev-pdf",
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      440: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        },
      1640: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
    },
  });