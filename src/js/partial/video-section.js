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

const playButton = document.querySelector('.videoPlayButton');
if (playButton){

  const videoPlayButtons = document.querySelectorAll('.videoPlayButton');
  const videoModal = document.getElementById('videoModal');
  const videoIframe = document.getElementById('videoIframe');
  const closeModal = document.getElementById('closeModal');
  
  // Play button click event
  videoPlayButtons.forEach(button => {
    button.addEventListener('click', () => {
      event.preventDefault();
      const videoSrc = button.getAttribute('data-video');
      videoIframe.src = videoSrc; // Set iframe src to the video URL
      videoModal.classList.add('active');
    });
  });
  
  
  // Close modal on close button click
  closeModal.addEventListener('click', closeModalModal);
  
  function closeModalModal() {
    videoModal.classList.remove('active');
    videoIframe.src = ''; // Stop the video
  }
  
  // Modal dışına tıklama ile kapatma
  videoModal.addEventListener('click', (event) => {
    const modalContent = document.querySelector('.video-modal-content');
    console.log("ksjkdfbvmsdfhjb")
    
    // Eğer tıklanan yer modal içerik elemanının dışında ise modal kapanır
    if (!modalContent.contains(event.target)) {
      closeModalModal();
    }
  });

}


