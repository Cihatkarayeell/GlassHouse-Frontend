const moreButton = document.getElementById('dataCentreMore');
if(moreButton){
    moreButton.addEventListener('click', function() {
        // Disabled class'ı olan ilk elementi bul
        const disabledItem = document.querySelector('.announcements-item.disabled');
        
        if (disabledItem) {
            // Disabled class'ını kaldır
            disabledItem.classList.remove('disabled');
            
            // Disabled class'ı olan element var mı diye kontrol et
            const hasMoreDisabled = document.querySelector('.announcements-item.disabled');
            
            // Eğer hiç disabled kalmadıysa butona disabled ekle
            if (!hasMoreDisabled) {
                moreButton.classList.add('disabled');
            }
        }
    });
}