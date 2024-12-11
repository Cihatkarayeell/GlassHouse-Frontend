const  glossary = document.querySelector('.glossary-section');
if(glossary){
    const buttons = document.querySelectorAll('.letter-btn');
    
    // Her buton için tıklama olayını ekliyoruz
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Önce tüm butonlardan "active" sınıfını kaldır
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Tıklanan butona "active" sınıfını ekle
            button.classList.add('active');
        });
    });
}
