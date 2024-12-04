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
