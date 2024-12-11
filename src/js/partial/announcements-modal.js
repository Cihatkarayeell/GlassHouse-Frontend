const announcementModal = document.querySelector('.announcements-modal');
if (announcementModal){
  // Tüm .announcement-link elementlerini seçiyoruz
  const announcementLinks = document.querySelectorAll('.announcement-link');
  
  // Modal ve kapatma butonunu seçiyoruz
  const modal = document.getElementById('announcementsModal');
  const closeModalButton = document.querySelector('.close-button');
  
  // Her bir announcement-link elementine tıklama olayını ekliyoruz
  announcementLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Linkin varsayılan davranışını engelle
      modal.classList.add('active'); // Modalı aktif yap
    });
  });
  
  
  
  // Close butonuna tıklanırsa modalı kapat
  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}
