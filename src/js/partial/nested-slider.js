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
      breakpoints: {
        340: {
          slidesPerView: 1.4,
          spaceBetween: 16,
          centeredSlides:false,          
        },
        440: {
          slidesPerView: 1.8,
          spaceBetween: 16,
          centeredSlides:false,          
        },
        540: {
          slidesPerView: 1.8,
          spaceBetween: 16,
          centeredSlides:false,          
        },
        640: {
          slidesPerView: 2.2,
          spaceBetween: 16,
          centeredSlides:false,          
        },
        768: {
          slidesPerView: 2.4,
          spaceBetween: 16,
          centeredSlides:false,          
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