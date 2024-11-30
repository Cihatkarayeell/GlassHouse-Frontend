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

	/*
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

 */
	/*document.querySelectorAll('table').forEach(table => {
	if(!table.parentElement.classList.contains('table-responsive')) {
		table.outerHTML = '<div class="table-responsive">' + table.outerHTML + '</div>';
	}
});
 */
});
 

 
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG5jb25zdCBQQVRIX1VSTCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuY29uc3QgRlVMTF9VUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuY29uc3QgYXBwID0ge307XHJcbmNvbnN0IEdFVF9QQVJBTSA9IChrZXkpID0+IHtcclxuXHRyZXR1cm4gbmV3IFVSTChGVUxMX1VSTCkuc2VhcmNoUGFyYW1zLmdldChrZXkpO1xyXG59O1xyXG5cclxuXHJcbi8vIFBBUlRJQUxTXHJcbkBAaW5jbHVkZSgncGFydGlhbC9oZWFkZXIuanMnKSBcclxuQEBpbmNsdWRlKCdwYXJ0aWFsL3dhdGVybWFyay5qcycpXHJcbiBcclxuLy8gVVRJTFNcclxuQEBpbmNsdWRlKCd1dGlsL2ZhZGUtb3V0LmpzJylcclxuQEBpbmNsdWRlKCd1dGlsL3Ntb290aC1zY3JvbGwuanMnKVxyXG5AQGluY2x1ZGUoJ3V0aWwvcmVwbGFjZS1icm9rZW4taW1hZ2UuanMnKVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHQvLyBQQVJUSUFMU1xyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9mb3JtYXQtdGVsLWxpbmsuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9leHRlcm5hbC1saW5rLW5vcmVmZXIuanMnKVxyXG5cdEBAaW5jbHVkZSgncGFydGlhbC9wcm90ZWN0LWltYWdlLmpzJylcclxuXHRAQGluY2x1ZGUoJ3BhcnRpYWwvY3VzdG9tZXItc2xpZGVycy5qcycpXHJcblx0LypAQGluY2x1ZGUoJ3BhcnRpYWwvcmVzcG9uc2l2ZS10YWJsZS5qcycpICovXHJcbn0pO1xyXG4gXHJcblxyXG5AQGluY2x1ZGUoJ3BhcnRpYWwvaW5pdC5qcycpIFxyXG4iXSwiZmlsZSI6Im1haW4uanMifQ==
