const form = document.querySelector('form');
const closeBtn = document.querySelector('.form-button');
const modal = document.querySelector('.form-modal');
if (form){
  // Modal kapatma fonksiyonu
  function closeModal() {
      if (modal) {
          modal.classList.remove('active');
          const waitBody = document.getElementById('waitBody');
          const successBody = document.getElementById('successBody');
          
          if (waitBody) waitBody.classList.remove('active');
          if (successBody) successBody.classList.remove('active');
          
          // Formu resetle
          form.reset();
          // Invalid classlarını temizle
          const formItems = form.querySelectorAll('.form-item');
          formItems.forEach(item => {
              item.classList.remove('invalid');
          });
      }
  }
  // Kapatma butonuna tıklama eventi
  if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
  }
  
  // Form submit kontrolü
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      let isValid = true;
      
      // Form-item elementlerini kontrol et
      const formItems = form.querySelectorAll('.form-item');
      
      formItems.forEach(item => {
          const hasTooltip = item.querySelector('.invalid-tooltip');
          const input = item.querySelector('input, textarea');
          
          if (hasTooltip && input) {
              if (!input.value.trim()) {
                  item.classList.add('invalid');
                  isValid = false;
              } else {
                  item.classList.remove('invalid');
              }
          }
      });
  
      if (isValid) {
          if (modal) {
              const waitBody = document.getElementById('waitBody');
              const successBody = document.getElementById('successBody');
  
              if (waitBody && successBody) {
                  modal.classList.add('active');
                  waitBody.classList.add('active');
  
                  setTimeout(() => {
                      waitBody.classList.remove('active');
                      successBody.classList.add('active');
                  }, 3000);
              }
          }
      }
  });
  
  // Sürekli input kontrolü
  const formItems = form.querySelectorAll('.form-item');
  formItems.forEach(item => {
      const input = item.querySelector('input, textarea');
      const hasTooltip = item.querySelector('.invalid-tooltip');
      
      if (input && hasTooltip) {
          input.addEventListener('input', function() {
              if (this.value.trim()) {
                  item.classList.remove('invalid');
              }
          });
      }
  });
}