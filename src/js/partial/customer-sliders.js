const customerSlider = document.querySelector('.customer-sliders');
if(customerSlider){
    
  let isSliding = false;

  // Ana slider tanımlamaları
  const slider1 = new Swiper(".mySwiper-top-left", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      speed: 700,
      allowTouchMove: true,
      simulateTouch: false,
    draggable: false,
    noSwiping: true,
    
    });

  const slider2 = new Swiper(".mySwiper-bottom-left", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      effect: "fade",
      speed: 700,
      allowTouchMove: true,
      simulateTouch: false,
    draggable: false,
    noSwiping: true,
  });

  const slider3 = new Swiper(".mySwiper-top-right", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 700,
      allowTouchMove: true,
      simulateTouch: false,
    draggable: false,
    noSwiping: true,
  });

  const slider4 = new Swiper(".mySwiper-bottom-right", {
      slidesPerView: 8,
      spaceBetween: 0,
      loop: true,
      speed: 700,
      allowTouchMove: true,
      simulateTouch: false,
    draggable: false,
    noSwiping: true,
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
    
    // // Touch ve drag olayları için senkronizasyon
    // const allSliders = [slider1, slider2, slider3, slider4];
    // // slideChangeTransitionEnd
    // allSliders.forEach((slider, index) => {
    //     slider.on('slideChangeTransitionEnd', function() {
    //         if (isSliding) return;
    //         isSliding = true;
    
    //         const currentIndex = this.realIndex;
    //         allSliders.forEach((otherSlider, otherIndex) => {
    //             if (index !== otherIndex) {
    //                 otherSlider.slideTo(currentIndex, 700);
    //             }
    //         });
    
    //         setTimeout(() => {
    //             isSliding = false;
    //         }, 700);
    //     });
    // });
    // Sliderları oluştur

    // const swiper1 = new Swiper('.swiper1', {
    //   // Diğer swiper ayarları
    //   slideChange: function() {
    //       syncSliderIndex(swiper1.realIndex);
    //   }
    // });

    // const swiper2 = new Swiper('.swiper2', {
    //   // Diğer swiper ayarları
    //   slideChange: function() {
    //       syncSliderIndex(swiper2.realIndex);
    //   }
    // });

    // const swiper3 = new Swiper('.swiper3', {
    //   // Diğer swiper ayarları
    //   slideChange: function() {
    //       syncSliderIndex(swiper3.realIndex);
    //   }
    //       });

    //       const swiper4 = new Swiper('.swiper4', {
    //         // Diğer swiper ayarları
    //         slideChange: function() {
    //             syncSliderIndex(swiper4.realIndex);
    //         }
    //       });

    //       // Tüm sliderları senkronize et
    //       function syncSliderIndex(index) {
    //         swiper1.slideTo(index);
    //         swiper2.slideTo(index);
    //         swiper3.slideTo(index);
    //         swiper4.slideTo(index);
    //       }

    //       // Butonla geçiş yapıldığında diğer sliderları güncelle
    //       document.querySelector('.nextButton').addEventListener('click', function() {
    //         let currentIndex = swiper1.realIndex;
    //         swiper1.slideNext();
    //         let newIndex = swiper1.realIndex;
    //         syncSliderIndex(newIndex);
    //       });

    //       document.querySelector('.prevButton').addEventListener('click', function() {
    //         let currentIndex = swiper1.realIndex;
    //         swiper1.slidePrev();
    //         let newIndex = swiper1.realIndex;
    //         syncSliderIndex(newIndex);
    //       });

    // kaydır bırak özelliğini aktif etmek için üst kısım daki kodlar acılmalı ;
    
}