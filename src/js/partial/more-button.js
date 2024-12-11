// Tüm .more-button butonlarını seçiyoruz
const moreButtons = document.querySelectorAll('.more-button');

// Eğer sayfada bir veya birden fazla .more-button varsa
if (moreButtons.length > 0) {
  moreButtons.forEach(moreButton => {
    // Her bir butona ait olan en yakın kapsayıcıyı buluyoruz
    const container = moreButton.closest('.container'); // Kapsayıcı sınıfını sen belirle!
    const moreWraps = container.querySelectorAll('.more-wrap'); // Sadece kapsayıcı içindeki .more-wrap elemanlarını seçiyoruz

    // Sayfa yüklendiğinde buton ve kartların durumunu kontrol eden fonksiyon
    function initializeButtonState() {
      // Eğer kapsayıcı içindeki .more-wrap elemanlarında en az bir tane .disabled varsa
      const hasDisabledCard = Array.from(moreWraps).some(card => card.classList.contains('disabled'));

      if (hasDisabledCard) {
        // Eğer .disabled sınıfı olan bir eleman varsa, butondan disabled sınıfını kaldır
        moreButton.classList.remove('disabled');
      } else {
        // Eğer .disabled sınıfı olan bir eleman yoksa, butona disabled sınıfını ekle
        moreButton.classList.add('disabled');
      }
    }

    // Butona tıklandığında yapılacak işlemler
    moreButton.addEventListener('click', () => {
      // İlk bulunan .disabled sınıfına sahip .more-wrap elemanını bul
      const disabledCard = Array.from(moreWraps).find(card => card.classList.contains('disabled'));

      if (disabledCard) {
        // Eğer böyle bir eleman varsa, .disabled sınıfını kaldır
        disabledCard.classList.remove('disabled');
      }

      // Her tıklamadan sonra durumu yeniden kontrol et
      initializeButtonState();
    });

    // Sayfa yüklendiğinde durumu kontrol et
    initializeButtonState();
  });
}
