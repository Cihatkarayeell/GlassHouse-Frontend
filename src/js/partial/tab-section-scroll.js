const tabScroll = document.querySelector('.tab-section-scroll');

if(tabScroll) {
    // Tab click olayları
    document.querySelectorAll('.tab-item').forEach(item => {
        // Data-id attribute'larını ekle
        const href = item.getAttribute('href');
        const id = href.replace('#', '');
        item.setAttribute('data-id', id);

        item.addEventListener('click', event => {
            // Tüm tab-item'lerden 'active' sınıfını kaldır
            document.querySelectorAll('.tab-item').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Tıklanan öğeye 'active' sınıfını ekle
            item.classList.add('active');
        });
    });

    // Scroll olayını dinle
    const scrollSections = document.querySelectorAll('.c-e-d-scroll');
    
    // IntersectionObserver oluştur
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const currentId = entry.target.id;
                
                // Tab'leri güncelle
                document.querySelectorAll('.tab-item').forEach(tab => {
                    const tabId = tab.getAttribute('data-id');
                    
                    if(tabId === currentId) {
                        // Önce tüm active class'ları kaldır
                        document.querySelectorAll('.tab-item').forEach(t => {
                            t.classList.remove('active');
                        });
                        // Eşleşen tab'e active class'ı ekle
                        tab.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.9, // Görünürlük eşiği %30
        rootMargin: '-10% 0px -10% 0px'
    });

    // Her scroll section'ı gözlemle
    scrollSections.forEach(section => {
        observer.observe(section);
    });
}