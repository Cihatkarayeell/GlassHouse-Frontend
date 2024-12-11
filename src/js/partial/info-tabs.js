const infotabButtons = document.querySelectorAll('.info-centre-hero .tab-item');
const infoBabBlocks = document.querySelectorAll('.tab-block .tab-item-block');

infotabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab'); // Butonun ait olduğu tab
    // Aktif butonu belirle
    infotabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Aktif tab block'u belirle
    infoBabBlocks.forEach(block => {
      if (block.getAttribute('data-tab') === targetTab) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  });
});
  