const tabButtons = document.querySelectorAll('.tabVideoButton');
const videoCards = document.querySelectorAll('.video-card');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Tüm butonlardaki "active" sınıfını kaldır
        console.log('kdfbvjsdhfbvsdjhfb');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Tıklanan butona "active" sınıfını ekle
        button.classList.add('active');
        // Hedef kategoriyi al
        const targetCategory = button.getAttribute('data-tab');
        
    // Video kartlarını filtrele
    videoCards.forEach(card => {
      if (targetCategory === 'all' || card.getAttribute('data-category') === targetCategory) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  });
});
  