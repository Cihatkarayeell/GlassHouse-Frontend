let isSliding = false;

// Ana slider tanımlamaları
const slider1 = new Swiper(".mySwiper-top-left", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    speed: 700,
    allowTouchMove: true
});

const slider2 = new Swiper(".mySwiper-bottom-left", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    speed: 700,
    allowTouchMove: true
});

const slider3 = new Swiper(".mySwiper-top-right", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    allowTouchMove: true
});

const slider4 = new Swiper(".mySwiper-bottom-right", {
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    speed: 700,
    allowTouchMove: true,
    breakpoints: {
      380: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      440: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      540: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      1100: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      1440: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
      1640: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
    },
});

const customerSlider = document.querySelector('.customer-sliders');
if(customerSlider){
  
  const nextButton1 = document.querySelector('.swiper-button-next-customer-1');
  const prevButton1 = document.querySelector('.swiper-button-prev-customer-2');
  const nextButton2 = document.querySelector('.swiper-button-next-customer-3');
  const prevButton2 = document.querySelector('.swiper-button-prev-customer-4');
  
  // Tüm sliderları senkronize hareket ettiren fonksiyon
  function syncSlides(direction) {
      if (isSliding) return;
      isSliding = true;
  
      if (direction === 'next') {
          slider1.slideNext();
          slider2.slideNext();
          slider3.slideNext();
          slider4.slideNext();
      } else {
          slider1.slidePrev();
          slider2.slidePrev();
          slider3.slidePrev();
          slider4.slidePrev();
      }
  
      setTimeout(() => {
          isSliding = false;
      }, 700);
  }
  
  // Her iki buton grubu için event listener'lar
  nextButton1.addEventListener('click', () => syncSlides('next'));
  prevButton1.addEventListener('click', () => syncSlides('prev'));
  nextButton2.addEventListener('click', () => syncSlides('next'));
  prevButton2.addEventListener('click', () => syncSlides('prev'));
  
  // Touch ve drag olayları için senkronizasyon
  const allSliders = [slider1, slider2, slider3, slider4];
  
  allSliders.forEach((slider, index) => {
      slider.on('slideChange', function() {
          if (isSliding) return;
          isSliding = true;
  
          const currentIndex = this.realIndex;
          allSliders.forEach((otherSlider, otherIndex) => {
              if (index !== otherIndex) {
                  otherSlider.slideTo(currentIndex, 700);
              }
          });
  
          setTimeout(() => {
              isSliding = false;
          }, 700);
      });
  });
    
}