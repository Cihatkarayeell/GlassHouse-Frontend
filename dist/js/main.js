const BASE_URL = window.location.protocol + '//' + window.location.host;
const PATH_URL = window.location.pathname;
const FULL_URL = window.location.href;
const app = {};
const GET_PARAM = (key) => {
	return new URL(FULL_URL).searchParams.get(key);
};


// PARTIALS
 

 
// UTILS
function fadeOut(element, soft = false, callback = null) {
	if(!element) {
		return false;
	}

	element.style.opacity = 1;

	(function fade() {
		if((element.style.opacity -= 0.1) < 0) {
			if(soft) {
				element.style.display = "none";
			} else {
				element.remove();
			}

			if(callback instanceof Function) {
				callback();
			} else if(window[callback] instanceof Function) {
				window[callback]();
			}
		} else {
			requestAnimationFrame(fade);
		}
	})();

}

function smoothScroll(element) {
	if(element) {
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
}

function smoothScrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
}

document.addEventListener('click', event => {
	if(event.target.tagName !== 'A') {
		return false;
	}
	const anchor = event.target;
	const anchor_href = anchor.getAttribute('href');

	if(anchor_href === '#') {
		event.preventDefault();
		smoothScrollToTop();
	}
	else if(anchor_href.charAt(0) === '#' || (anchor_href.charAt(0) === '/' && anchor_href.charAt(1) === '#')) {
		if(!anchor.hash) {
			return false;
		}

		const target = document.querySelector(anchor.hash);
		if(target) {
			event.preventDefault();
			smoothScroll(target);
		}
	}
});

window.onload = () => {
	document.querySelectorAll('img').forEach(image => {
		if(image.complete && typeof image.naturalWidth != 'undefined' && image.naturalWidth <= 0) {
			image.src = BASE_URL + '/img/no-image.jpg';
		}
	});
};


document.addEventListener('DOMContentLoaded', () => {
	// PARTIALS
	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('href') && anchor.href.startsWith('tel:')) {
		anchor.href = 'tel:' + anchor.href.replaceAll(/[^\d+]/g, '');
	}
});

	document.querySelectorAll('a').forEach(anchor => {
	if(anchor.hasAttribute('target') && anchor.getAttribute('target') === '_blank') {
		anchor.setAttribute('rel', 'noopener noreferrer nofollow');
	}
});

	document.addEventListener('contextmenu', event => {
	if(event.target.nodeName === 'IMG') {
		event.preventDefault();
	}
});

	var swiper = new Swiper(".mySwiper-top-left", {
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});

var swiper = new Swiper(".mySwiper-bottom-left", {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  effect: "fade",
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});

var swiper = new Swiper(".mySwiper-top-right", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop:true,
  centeredSlides: true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});
var swiper = new Swiper(".mySwiper-bottom-right", {
  slidesPerView: 6,
  spaceBetween: 0,
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next-customer",
      prevEl: ".swiper-button-prev-customer",
    },
});

	var swiper = new Swiper(".mySwiper-references", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next-references",
        prevEl: ".swiper-button-prev-references",
    },
    speed:700
  });
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

	const kvkk = document.getElementById('kvkk');
const newsletterCheck = document.getElementById('eBulten');

function toggleActiveClass(container) {
    const checkbox = container.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
        container.classList.add('active');
    } else {
        container.classList.remove('active');
    }
}

// Eğer 'kvkk' elemanı mevcutsa kodu çalıştır
if (kvkk) {
    kvkk.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        toggleActiveClass(kvkk);
    });

    toggleActiveClass(kvkk);
}

// Eğer 'eBulten' elemanı mevcutsa kodu çalıştır
if (newsletterCheck) {
    newsletterCheck.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        toggleActiveClass(newsletterCheck);
    });

    toggleActiveClass(newsletterCheck);
}

	const videoBlock = document.querySelector('.video-block');
const videoPlyBtn = document.querySelector('#videoPlyBtn');
const video = document.querySelector('#myVideo');

// Eğer #videoPlyBtn elementi mevcutsa kodu çalıştır
if (videoPlyBtn) {
  // Play button tıklama olayı
  videoPlyBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Tıklamanın body'ye yayılmasını engelle
    videoBlock.classList.add('active'); // Kapsayıcıya active ekle
    video.play(); // Video oynat
  });

  // Body tıklama olayı (sınıfı kaldırmak için)
  document.addEventListener('click', (event) => {
    if (!videoBlock.contains(event.target)) { // Tıklanan yer video-block dışında ise
      videoBlock.classList.remove('active');
      video.pause(); // Video durdur (isteğe bağlı)
    }
  });
}

	var swiper = new Swiper(".mySwiper-history", {
    slidesPerView: 1.6,
    spaceBetween: 30,
    loop:true,
    speed:700,
    navigation: {
        nextEl: ".swiper-button-next-history",
        prevEl: ".swiper-button-prev-history",
      },
  });
	var swiper = new Swiper(".mySwiper-contact-info", {
    navigation: {
      nextEl: ".swiper-button-next-contact-info",
      prevEl: ".swiper-button-prev-contact-info",
    },
    slidesPerView: 3.1,
    spaceBetween: 20,
    speed:700,
    loop:true,
  });
	function startCounter(element, target) {
    let count = 0;
    const increment = target / 200; // Hızı ayarlamak için artırma değeri

    const updateCount = () => {
        count += increment;
        if (count < target) {
            element.innerText = Math.floor(count);
            requestAnimationFrame(updateCount);
        } else {
            element.innerText = target;
        }
    };
    updateCount();
}

const counters = document.querySelectorAll('.count');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = +entry.target.getAttribute('data-target');
            startCounter(entry.target, target);
            observer.unobserve(entry.target); // Yalnızca bir kez çalıştır
        }
    });
}, {
    threshold: 0.5 // %50 görünür olduğunda sayacı başlat
});

counters.forEach(counter => {
    observer.observe(counter);
});
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
  });
	var swiper = new Swiper(".mySwiper-pdf", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop:true,
    speed:700,
    navigation: {
      nextEl: ".swiper-button-next-pdf",
      prevEl: ".swiper-button-prev-pdf",
    },
  });
	const tabScroll = document.querySelector('.tab-section-scroll');
if(tabScroll){
    document.querySelectorAll('.tab-item').forEach(item => {
        item.addEventListener('click', event => {
            
            // Tüm tab-item'lerden 'active' sınıfını kaldır
            document.querySelectorAll('.tab-item').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Tıklanan öğeye 'active' sınıfını ekle
            item.classList.add('active');
        });
    });
}
  
	var swiper = new Swiper(".mySwiper-gives-services", {
    slidesPerView: 3.8,
    spaceBetween: 16,
    speed:700,
  });
	var swiper = new Swiper(".mySwiper-success", {
    slidesPerView: 3,
    spaceBetween: 32,
    loop:true,
    speed:700,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next-success",
      prevEl: ".swiper-button-prev-success",
    },
  });
	/*document.querySelectorAll('table').forEach(table => {
	if(!table.parentElement.classList.contains('table-responsive')) {
		table.outerHTML = '<div class="table-responsive">' + table.outerHTML + '</div>';
	}
});
 */
});
 

 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5jb25zdCBQQVRIX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgRlVMTF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuY29uc3QgYXBwID0ge307XHJcbmNvbnN0IEdFVF9QQVJBTSA9IChrZXkpID0+IHtcclxuXHRyZXR1cm4gbmV3IFVSTChGVUxMX1VSTCkuc2VhcmNoUGFyYW1zLmdldChrZXkpO1xyXG59O1xyXG5cclxuXHJcbi8vIFBBUlRJQUxTXHJcbkBAaW5jbHVkZSgncGFydGlhbC9oZWFkZXIuanMnKSBcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3dhdGVybWFyay5qcycpXHJcbiBcclxuLy8gVVRJTFNcclxuQEBpbmNsdWRlKCd1dGlsL2ZhZGUtb3V0LmpzJylcclxuQEBpbmNsdWRlKCd1dGlsL3Ntb290aC1zY3JvbGwuanMnKVxyXG5AQGluY2x1ZGUoJ3V0aWwvcmVwbGFjZS1icm9rZW4taW1hZ2UuanMnKVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHQvLyBQQVJUSUFMU1xyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9mb3JtYXQtdGVsLWxpbmsuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9leHRlcm5hbC1saW5rLW5vcmVmZXIuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9wcm90ZWN0LWltYWdlLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvY3VzdG9tZXItc2xpZGVycy5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3JlZmVyZW5jZXMtc2xpZGVycy5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3NlcnZpY2VzLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvZm9ybS1jaGVjay5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3ZpZGVvLXNlY3Rpb24uanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9oaXN0b3J5LXNsaWRlci5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL2NvbnRhY3QtaW5mby1zbGlkZXIuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9jb3VudGVyLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvbmVzdGVkLXNsaWRlci5qcycpXHJcblx0QEBpbmNsdWRlKCdwYXJ0aWFsL3BkZi1zbGlkZXIuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC90YWItc2VjdGlvbi1zY3JvbGwuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9zZXJ2aWNlcy1zbGlkZXIuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9zdWNjZXNzLXNsaWRlci5qcycpXHJcblx0LypAQGluY2x1ZGUoJ3BhcnRpYWwvcmVzcG9uc2l2ZS10YWJsZS5qcycpICovXHJcbn0pO1xyXG4gXHJcblxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvaW5pdC5qcycpIFxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
