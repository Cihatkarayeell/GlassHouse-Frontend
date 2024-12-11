document.addEventListener('DOMContentLoaded', function() {
    // Menüyü açma/kapama
    const menuToggle = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const body = document.querySelector('body');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            body.classList.add('mobile');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.classList.remove('mobile');
        });
    }
    

    
});
document.addEventListener('DOMContentLoaded', function() {
    // Ana accordion için event listener
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            toggleAccordion(this);
        });
    });

    // Alt accordion için event listener
    const subAccordionHeaders = document.querySelectorAll('.sub-accordion-header');
    subAccordionHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.stopPropagation(); // Ana accordion'un tetiklenmesini engelle
            toggleSubAccordion(this);
        });
    });

    function toggleAccordion(header) {
        const content = header.nextElementSibling;
        const toggleBtn = header.querySelector('.toggle-btn');
        const parent = header.parentElement;
        
        
        
        content.classList.toggle('active');
        if (toggleBtn) {
            toggleBtn.classList.toggle('active');
        }
    }

    function toggleSubAccordion(header) {
        const content = header.nextElementSibling;
        const toggleBtn = header.querySelector('.sub-toggle-btn');
        const parent = header.parentElement;
        
        // Diğer açık alt accordionları kapat
        const siblingItems = parent.parentElement.querySelectorAll('.sub-accordion-item');
        siblingItems.forEach(item => {
            if (item !== parent) {
                const itemContent = item.querySelector('.sub-accordion-content');
                const itemBtn = item.querySelector('.sub-toggle-btn');
                if (itemContent) {
                    itemContent.classList.remove('active');
                }
                if (itemBtn) {
                    itemBtn.classList.remove('active');
                }
            }
        });
        
        content.classList.toggle('active');
        if (toggleBtn) {
            toggleBtn.classList.toggle('active');
        }
    }
});
