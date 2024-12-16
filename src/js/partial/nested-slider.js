  var swiper = new Swiper(".mySwiper-nested", {
    slidesPerView: 5.5,
    spaceBetween: -200,
    speed: 700,
    initialSlide: 0,
    slidesOffsetBefore: 80,
    centeredSlides: false,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next-nested",
        prevEl: ".swiper-button-prev-nested",
    },
    breakpoints: {
        340: {
            slidesPerView: 1.4,
            spaceBetween: 0,
            slidesOffsetBefore: 20,
        },
        440: {
            slidesPerView: 1.8,
            spaceBetween: 0,
            slidesOffsetBefore: 30,
        },
        540: {
            slidesPerView: 2.2,
            spaceBetween: 0,
            slidesOffsetBefore: 40,
        },
        640: {
            slidesPerView: 2.8,
            spaceBetween: 0,
            slidesOffsetBefore: 50,
        },
        768: {
            slidesPerView: 3.2,
            spaceBetween: 0,
            slidesOffsetBefore: 60,
        },
        1024: {
            slidesPerView: 4.2,
            spaceBetween: -80,
            slidesOffsetBefore: 80,
        },
        1440: {
            slidesPerView: 5.5,
            spaceBetween: -200,
            slidesOffsetBefore: 100,
        }
    }
  });