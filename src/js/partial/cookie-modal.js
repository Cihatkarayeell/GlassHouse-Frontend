const cookieModal = document.querySelector('.cookie-modal');
const rejectButton = document.querySelector('.cookie-reject');
const acceptButton = document.querySelector('.cookie-accept');
// Local storage'da cookie onayı kontrolü

// Eğer daha önce cookie onayı verilmemişse
if (cookieModal) {
    // 10 saniye sonra modalı aç
    setTimeout(() => {
        cookieModal.classList.add('active');
    }, 3000); // 10000 milisaniye = 10 saniye
    
    // Kabul et butonuna tıklanınca
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiePreference', 'accepted');
        cookieModal.classList.remove('active');
    });
    
    // Reddet butonuna tıklanınca
    rejectButton.addEventListener('click', () => {
        localStorage.setItem('cookiePreference', 'rejected');
        cookieModal.classList.remove('active');
    });
}