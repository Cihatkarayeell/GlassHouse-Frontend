var swiper = new Swiper(".mySwiper-history", {
    slidesPerView: 1.6,
    spaceBetween: 30,
    speed:700,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next-history",
        prevEl: ".swiper-button-prev-history",
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
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.4,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 1.6,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 1.6,
          spaceBetween: 30,
        },
        1100: {
          slidesPerView: 1.6,
          spaceBetween: 30,
        },
        1440: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
        1640: {
            slidesPerView: 2.4,
            spaceBetween: 30,
          },
      },
  });