function Marquee(selector, speed) {
    const container = document.querySelector(selector);
    if (!container) return;

    // İçeriği klonla
    const originalContent = container.innerHTML;
    
    // 4 kez klonlama
    for(let i = 0; i < 8; i++) {
        container.insertAdjacentHTML('beforeend', originalContent);
    }

    container.style.display = 'flex';
    
    let position = 0;
    let animationFrameId;
    
    // Görünür alan genişliği (container'ın görünür genişliği)
    const viewportWidth = container.offsetWidth;
    
    // Tek set içeriğin genişliğini hesapla
    const items = container.querySelectorAll('.reference-item');
    const originalItemCount = items.length / 5; // 5 = 1 orijinal + 4 klon
    const singleSetWidth = Array.from(items)
        .slice(0, originalItemCount)
        .reduce((width, item) => width + item.offsetWidth + 20, 0);
    
    function animate() {
        position += speed;
        
        // Son element ekrana geldiğinde sıfırla
        // viewportWidth'i çıkarıyoruz çünkü container'ın görünür alanını hesaba katmamız gerek
        if (position >= singleSetWidth - viewportWidth) {
            position = 0;
        }
        
        container.style.transform = `translateX(-${position}px)`;
        animationFrameId = requestAnimationFrame(animate);
    }
    
    // Sayfa görünür olmadığında animasyonu durdur
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationFrameId);
        } else {
            animate();
        }
    });
    
    // Mouse üzerine geldiğinde dur
    container.addEventListener('mouseenter', () => {
        cancelAnimationFrame(animationFrameId);
    });
    
    // Mouse ayrıldığında devam et
    container.addEventListener('mouseleave', () => {
        animate();
    });
    
    // Pencere yeniden boyutlandığında genişlikleri güncelle
    window.addEventListener('resize', () => {
        // Görünür alan genişliğini güncelle
        const newViewportWidth = container.offsetWidth;
        
        // Yeni genişlikleri hesapla
        const newItems = container.querySelectorAll('.reference-item');
        const newSingleSetWidth = Array.from(newItems)
            .slice(0, newItems.length / 5)
            .reduce((width, item) => width + item.offsetWidth + 20, 0);
        
        // Eğer mevcut pozisyon yeni limiti geçtiyse sıfırla
        if (position >= newSingleSetWidth - newViewportWidth) {
            position = 0;
        }
    });
    
    // Animasyonu başlat
    animate();
    
    return {
        stop: () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        },
        start: () => {
            animate();
        }
    };
}

// Sayfa yüklendiğinde başlat
window.addEventListener('load', () => {
    const marquee = Marquee('.marguee', 0.2);
    console.log(marquee);
});