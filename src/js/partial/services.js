var swiper = new Swiper(".mySwiper-services", {
    slidesPerView: 4.2,
    spaceBetween: 16,
    centeredSlides: true,
    loop:true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next-services",
        prevEl: ".swiper-button-prev-services",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4.2,
          spaceBetween: 16,
        },
        1440: {
            slidesPerView: 5.3,
            spaceBetween: 16,
          },
      },
  });



// Buton ve slider seçicileri
const btnCloud = document.getElementById("bulut");
const btnPremise = document.getElementById("on-promise");
const sliderCloud = document.getElementById("cloudServices");
const sliderPremise = document.getElementById("onePromise");

// Aktif fonksiyon
function setActive(button, slider) {
  // Tüm butonların aktif durumunu kaldır
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Tüm slider'ların aktif durumunu kaldır
  document.querySelectorAll(".tab-block").forEach((sld) => {
    sld.classList.remove("active");
  });

  // Tıklanan butona ve slider'a aktif sınıfını ekle
  button.classList.add("active");
  slider.classList.add("active");
}

// Butonlara tıklama olayları
btnCloud.addEventListener("click", () => {
  setActive(btnCloud, sliderCloud); // Cloud butonu ve slider'ı aktif yap
});

btnPremise.addEventListener("click", () => {
  setActive(btnPremise, sliderPremise); // Premise butonu ve slider'ı aktif yap
});


// Tüm radio-tab butonlarını ve tab-slider-block elementlerini seçiyoruz
const radioTabsCloud = document.querySelectorAll(".radio-tab-cloud");
const tabBlocksCloud = document.querySelectorAll(".tab-slider-block-cloud");

// Fonksiyon: Butona tıklanınca eşleşen blok aktif hale gelir
function handleTabClick(event) {
  const clickedTab = event.currentTarget; // Tıklanan butonu al
  const targetTab = clickedTab.getAttribute("data-tab"); // data-tab değerini al

  // 1. Tüm butonlardan ve circle içinden "active" sınıfını kaldır
  radioTabsCloud.forEach((btn) => {
    btn.classList.remove("active");
    btn.querySelector(".circle").classList.remove("active");
  });

  // 2. Tüm tab-slider-block'lardan "active" sınıfını kaldır
  tabBlocksCloud.forEach((block) => block.classList.remove("active"));

  // 3. Tıklanan butona ve circle'a "active" sınıfını ekle
  clickedTab.classList.add("active");
  clickedTab.querySelector(".circle").classList.add("active");

  // 4. Eşleşen slider bloğa "active" sınıfını ekle
  tabBlocksCloud.forEach((block) => {
    if (block.getAttribute("data-tab") === targetTab) {
      block.classList.add("active");
    }
  });
}

// Tüm radio-tab butonlarına tıklama olayını ekle
radioTabsCloud.forEach((btn) => {
  btn.addEventListener("click", handleTabClick);
});




// Tüm radio-tab butonlarını ve tab-slider-block elementlerini seçiyoruz
const radioTabsPromise = document.querySelectorAll(".radio-tab-promise");
const tabBlocksPromise = document.querySelectorAll(".tab-slider-block-promise");

// Fonksiyon: Butona tıklanınca eşleşen blok aktif hale gelir
function handleTabClick(event) {
    const clickedTab = event.currentTarget; // Tıklanan butonu al
    const targetTab = clickedTab.getAttribute("data-tab"); // data-tab değerini al
  
    // 1. Tüm butonlardan ve circle içinden "active" sınıfını kaldır
    radioTabsPromise.forEach((btn) => {
      btn.classList.remove("active");
      btn.querySelector(".circle").classList.remove("active");
    });
  
    // 2. Tüm tab-slider-block'lardan "active" sınıfını kaldır
    tabBlocksPromise.forEach((block) => block.classList.remove("active"));
  
    // 3. Tıklanan butona ve circle'a "active" sınıfını ekle
    clickedTab.classList.add("active");
    clickedTab.querySelector(".circle").classList.add("active");
  
    // 4. Eşleşen slider bloğa "active" sınıfını ekle
    tabBlocksPromise.forEach((block) => {
      if (block.getAttribute("data-tab") === targetTab) {
        block.classList.add("active");
      }
    });
  }
  
  // Tüm radio-tab butonlarına tıklama olayını ekle
  radioTabsPromise.forEach((btn) => {
    btn.addEventListener("click", handleTabClick);
  });
