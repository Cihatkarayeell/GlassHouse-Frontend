const messageTextarea = document.querySelector('.message-textarea');
if( messageTextarea){
    const textarea = document.querySelector('.message-textarea');
    const currentCount = document.querySelector('.current');
    const maxCount = 250;
    
    textarea.addEventListener('input', function() {
        const currentLength = this.value.length;
        currentCount.textContent = currentLength;
    });
    textarea.addEventListener('input', function() {
        const currentLength = this.value.length;
        currentCount.textContent = currentLength;
        
        // Karakter limiti uyarısı
        if (currentLength >= maxCount * 0.8) { // %80'ine ulaşıldığında
            currentCount.style.color = 'rgb(224 110 110)';
        } else {
            currentCount.style.color = '#666';
        }
    });

}