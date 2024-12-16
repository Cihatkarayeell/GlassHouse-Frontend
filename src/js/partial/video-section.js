const videoBlock = document.querySelector('.video-block');
const videoPlyBtn = document.querySelector('#videoPlyBtn');
const video = document.querySelector('#myVideo');
let isPlaying = false; // Video oynatma durumunu takip etmek için flag

// Video oynatma işlemini yöneten fonksiyon
async function handleVideoPlayback(video) {
    try {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            await playPromise;
            isPlaying = true;
            console.log('Video başarıyla oynatılıyor');
        }
    } catch (error) {
        if (error.name === "AbortError") {
            console.log('Video oynatma işlemi durduruldu');
        } else if (error.name === "NotAllowedError") {
            console.log('Otomatik oynatmaya izin verilmedi');
        } else {
            console.error('Video oynatma hatası:', error);
        }
        isPlaying = false;
        videoBlock.classList.remove('active');
    }
}

// Video toggle (play/pause) fonksiyonu
async function toggleVideo(video) {
    try {
        if (isPlaying) {
            video.pause();
            isPlaying = false;
        } else {
            await handleVideoPlayback(video);
        }
    } catch (error) {
        console.error('Video toggle hatası:', error);
    }
}

// Eğer #videoPlyBtn elementi mevcutsa kodu çalıştır
if (videoPlyBtn) {
    // Play button tıklama olayı
    videoPlyBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Tıklamanın body'ye yayılmasını engelle
        videoBlock.classList.add('active'); // Kapsayıcıya active ekle
        handleVideoPlayback(video); // Güvenli video oynatma işlemini başlat
    });

    // Video elementine tıklama olayı
    video.addEventListener('click', (event) => {
        event.stopPropagation(); // Tıklamanın body'ye yayılmasını engelle
        toggleVideo(video);
    });

    // Body tıklama olayı (sınıfı kaldırmak için)
    document.addEventListener('click', async (event) => {
        if (!videoBlock.contains(event.target)) { // Tıklanan yer video-block dışında ise
            videoBlock.classList.remove('active');
            try {
                video.pause(); // Video durdur
                isPlaying = false;
            } catch (error) {
                console.error('Video durdurma hatası:', error);
            }
        }
    });
}



const playButton = document.querySelector('.videoPlayButton');
if (playButton) {
    const videoPlayButtons = document.querySelectorAll('.videoPlayButton');
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    const closeModal = document.getElementById('closeModal');
    const modalContent = videoModal.querySelector('.modal-body');

    // Play button click event
    videoPlayButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const videoSrc = button.getAttribute('data-video');
            videoIframe.src = videoSrc;
            videoModal.classList.add('active');
        });
    });

    // Close modal function
    function closeModalModal() {
        videoModal.classList.remove('active');
        videoIframe.src = '';
    }

    // Close button click event
    closeModal.addEventListener('click', closeModalModal);

    // Close on outside click
    videoModal.addEventListener('click', (event) => {
        if (!modalContent.contains(event.target) && event.target !== modalContent) {
            closeModalModal();
        }
    });
}