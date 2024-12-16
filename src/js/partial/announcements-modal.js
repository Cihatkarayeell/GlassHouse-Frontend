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
      // Modal dışına tıklandığında kapat
      modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            console.log('lskjfblsjdfkb')
              modal.classList.remove('active');
          }
      });

    // ESC tuşu ile kapat
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

 

    announcementLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            modal.classList.add('active');
            toggleBodyScroll(true);
        });
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('active');
        toggleBodyScroll(false);
    });

}

