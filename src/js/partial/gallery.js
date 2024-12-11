var swiper = new Swiper(".mySwiper-gallery", {
    slidesPerView: 5,
    spaceBetween: 32,
    grabCursor:true,
    speed:700,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next-gallery",
      prevEl: ".swiper-button-prev-gallery",
    },
    breakpoints: {
        350: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        440: {
          slidesPerView: 1.3,
          spaceBetween: 16,
        },
        540: {
          slidesPerView: 1.8,
          spaceBetween: 32,
        },
        640: {
          slidesPerView: 3.8,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 4.3,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4.8,
          spaceBetween: 32,
        },
        1100: {
          slidesPerView: 5,
          spaceBetween: 32,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        1640: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
      },
  });


  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
});