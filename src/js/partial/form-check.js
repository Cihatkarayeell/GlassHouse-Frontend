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
