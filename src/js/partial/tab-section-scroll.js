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
  