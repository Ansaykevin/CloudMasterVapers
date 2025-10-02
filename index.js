document.addEventListener('DOMContentLoaded', function () {
    
    const menuIcon = document.querySelector('.test-btn-main');
    const menuSection = document.querySelector('.mobile');

    if (menuIcon && menuSection) {
        menuIcon.addEventListener('click', function () {

            menuSection.classList.toggle('active');
         
        });
    
    }
});