var swiper = new Swiper(".mySwiper-other-news", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop:true,
    speed:700,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next-other-news",
      prevEl: ".swiper-button-prev-other-news",
    },
    breakpoints: {
        350: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        440: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        540: {
          slidesPerView: 1.4,
          spaceBetween: 32,
        },
        640: {
          slidesPerView: 2.4,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2.7,
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
            slidesPerView: 3,
            spaceBetween: 32,
          },
      },
  });