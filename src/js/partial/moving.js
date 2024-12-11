const moving = document.querySelector('#movingTitle');
if (moving){
  // Taşınacak element ve hedef container'lar
  const movingTitle = document.querySelector('#movingTitle h1');
  const heroAbout = document.querySelector('#heroAbout .title');
  const blurCard = document.querySelector('.blur-card');
  
  // Taşıma işlemini yapan fonksiyon
  function handleElementPlacement() {
    if (window.innerWidth <= 768 && movingTitle.parentElement !== blurCard) {
      // movingTitle'ı blur-card içine taşı
      blurCard.appendChild(movingTitle);
    }
  
    if (window.innerWidth > 768 && movingTitle.parentElement !== heroAbout) {
      // movingTitle'ı heroAbout içine geri taşı
      heroAbout.appendChild(movingTitle);
    }
  }
  
  // İlk kontrol
  handleElementPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleElementPlacement);

}  


const whyUsHero = document.querySelector('#whyUsHero');
if(whyUsHero){
  // Taşınacak element ve hedef container'lar
  const imgElement = document.querySelector('#whyUsHero .img');
  const mobileImgContainer = document.querySelector('#whyUsHero .mobile-img');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && imgElement.parentElement !== mobileImgContainer) {
      // .img içeriğini .mobile-img içine taşı
      while (imgElement.firstChild) {
        mobileImgContainer.appendChild(imgElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && imgElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (mobileImgContainer.firstChild) {
        imgElement.appendChild(mobileImgContainer.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}


const businessPartners = document.querySelector('#businessPartners');
if(businessPartners){
  // Taşınacak element ve hedef container'lar
  const imgElement = document.querySelector('#businessPartners .img');
  const mobileImgContainer = document.querySelector('#businessPartners .mobile-img');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && imgElement.parentElement !== mobileImgContainer) {
      // .img içeriğini .mobile-img içine taşı
      while (imgElement.firstChild) {
        mobileImgContainer.appendChild(imgElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && imgElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (mobileImgContainer.firstChild) {
        imgElement.appendChild(mobileImgContainer.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}




const detailHero = document.querySelector('.customer-experience-detail-hero');
if(detailHero){
  // Taşınacak element ve hedef container'lar
  const imgElement = document.querySelector('.customer-experience-detail-hero .img');
  const mobileImgContainer = document.querySelector('.customer-experience-detail-hero .mobile-img');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && imgElement.parentElement !== mobileImgContainer) {
      // .img içeriğini .mobile-img içine taşı
      while (imgElement.firstChild) {
        mobileImgContainer.appendChild(imgElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && imgElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (mobileImgContainer.firstChild) {
        imgElement.appendChild(mobileImgContainer.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}




const sektorSection = document.querySelector('#sektör');
if(sektorSection){
  // Taşınacak element ve hedef container'lar
  const imgElement = document.querySelector('#sektör .img');
  const mobileImgContainer = document.querySelector('#sektör .mobile-img');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && imgElement.parentElement !== mobileImgContainer) {
      // .img içeriğini .mobile-img içine taşı
      while (imgElement.firstChild) {
        mobileImgContainer.appendChild(imgElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && imgElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (mobileImgContainer.firstChild) {
        imgElement.appendChild(mobileImgContainer.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}


const advantagesVideo = document.querySelector('#advantagesVideo');
if(advantagesVideo){
  // Taşınacak element ve hedef container'lar
  const centreElement = document.querySelector('#advantagesVideo .center-block');
  const header = document.querySelector('#advantagesVideo .header');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && centreElement.parentElement !== header) {
      // .img içeriğini .mobile-img içine taşı
      while (centreElement.firstChild) {
        header.appendChild(centreElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && centreElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (header.firstChild) {
        centreElement.appendChild(header.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}


const servicesDetail = document.querySelector('#servicesDetailHero');
if(servicesDetail){
  // Taşınacak element ve hedef container'lar
  const centreElement = document.querySelector('#servicesDetailHero .img');
  const header = document.querySelector('#servicesDetailHero .mobile-img');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && centreElement.parentElement !== header) {
      // .img içeriğini .mobile-img içine taşı
      while (centreElement.firstChild) {
        header.appendChild(centreElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && centreElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (header.firstChild) {
        centreElement.appendChild(header.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}



const whatIsIt = document.querySelector('#whatIsIt');
if(whatIsIt){
  // Taşınacak element ve hedef container'lar
  const centreElement = document.querySelector('#whatIsIt .img');
  const header = document.querySelector('#whatIsIt .mobile-img');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && centreElement.parentElement !== header) {
      // .img içeriğini .mobile-img içine taşı
      while (centreElement.firstChild) {
        header.appendChild(centreElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && centreElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (header.firstChild) {
        centreElement.appendChild(header.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}


const headerMoving = document.querySelector('.header-moving-btn');
if(headerMoving){
  // Taşınacak element ve hedef container'lar
  const centreElement = document.querySelector('.navbar .header-moving-btn');
  const header = document.querySelector('.mobile-menu .menu-footer .d-flex');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && centreElement.parentElement !== header) {
      // .img içeriğini .mobile-img içine taşı
      while (centreElement.firstChild) {
        header.appendChild(centreElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && centreElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (header.firstChild) {
        centreElement.appendChild(header.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}


const headerLanguage = document.querySelector('.header');
if(headerLanguage){
  // Taşınacak element ve hedef container'lar
  const centreElement = document.querySelector('.navbar .language');
  const header = document.querySelector('.mobile-menu .menu-footer .language');
  
  // Taşıma işlemini yapan fonksiyon
  function handleImgPlacement() {
    if (window.innerWidth <= 1024 && centreElement.parentElement !== header) {
      // .img içeriğini .mobile-img içine taşı
      while (centreElement.firstChild) {
        header.appendChild(centreElement.firstChild);
      }
    }
  
    if (window.innerWidth > 1024 && centreElement.childNodes.length === 0) {
      // İçeriği tekrar .img elementine geri taşı
      while (header.firstChild) {
        centreElement.appendChild(header.firstChild);
      }
    }
  }
  
  // İlk kontrol
  handleImgPlacement();
  
  // Ekran boyutu değişimlerini dinle
  window.addEventListener('resize', handleImgPlacement);
}



const customerSliders = document.querySelector('.customer-experiences');
if(customerSliders){
    // Taşınacak slider ve hedef container
    const slider1 = document.querySelector('.customer-experiences .customer-sliders .mySwiper-bottom-left');
    const sliderMove = document.querySelector('.customer-experiences .customer-sliders .right');
    
    // Slider'ın orijinal parent elementini saklayalım
    const originalParent = slider1.parentElement;
    
    // Taşıma işlemini yapan fonksiyon
    function handleSliderPlacement() {
        if (window.innerWidth <= 1024) {
            // Slider1'i sliderMove'un içine taşı
            if (slider1.parentElement !== sliderMove) {
                sliderMove.appendChild(slider1);
            }
        } else {
            // Slider1'i orijinal yerine geri taşı
            if (slider1.parentElement !== originalParent) {
                originalParent.appendChild(slider1);
            }
        }
        
        // Swiper instance'ını güncelle
        if (slider1.swiper) {
            slider1.swiper.update();
        }
    }
    
    // İlk yüklemede kontrol et
    handleSliderPlacement();
    
    // Ekran boyutu değiştiğinde kontrol et
    window.addEventListener('resize', handleSliderPlacement);
}