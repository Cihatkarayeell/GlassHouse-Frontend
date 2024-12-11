const solutions = document.querySelector('.solutions');

if (solutions){
  // #solutionMoreButton butonunu seçiyoruz
  const solutionMoreButton = document.querySelector("#solutionMoreButton");
  
  // Kapsayıcı içindeki tüm .card-layout elementlerini seçiyoruz
  const cardLayouts = document.querySelectorAll(".card-layout");
  
  // Sayfa yüklendiğinde veya herhangi bir işlemden sonra kontrol fonksiyonu
  function initializeButtonState() {
    // Eğer herhangi bir .card-layout elementinde .disabled sınıfı varsa
    const hasDisabledCard = Array.from(cardLayouts).some(card => card.classList.contains("disabled"));
  
    if (hasDisabledCard) {
      // Eğer en az bir tane .disabled varsa butondan .disabled sınıfını kaldır
      solutionMoreButton.classList.remove("disabled");
    } else {
      // Aksi takdirde butona .disabled sınıfını ekle
      solutionMoreButton.classList.add("disabled");
    }
  }
  
  // Buton tıklandığında yapılacak işlemler
  solutionMoreButton.addEventListener("click", () => {
    // İlk .disabled sınıfına sahip olan card bulunur
    const disabledCard = Array.from(cardLayouts).find(card => card.classList.contains("disabled"));
  
    if (disabledCard) {
      // Eğer böyle bir card varsa, .disabled sınıfını kaldır
      disabledCard.classList.remove("disabled");
    }
  
    // Her tıklamadan sonra durumu yeniden kontrol et
    initializeButtonState();
  });
  
  // Sayfa yüklendiğinde durumu kontrol et
  initializeButtonState();
}
