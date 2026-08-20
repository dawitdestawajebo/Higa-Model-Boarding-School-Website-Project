document.addEventListener("DOMContentLoaded", function () {
    // Navigation Drawer Toggle
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sideBarContainer = document.querySelector('.side-bar-container');

    if (menuButton && closeButton && sideBarContainer) {
        menuButton.addEventListener('click', () => {
            sideBarContainer.style.display = 'flex';
            menuButton.style.display = 'none';
            closeButton.style.display = 'block';
        });

        closeButton.addEventListener('click', () => {
            sideBarContainer.style.display = 'none';
            menuButton.style.display = 'block';
            closeButton.style.display = 'none';
        });
    }

    // Slideshow Logic
    let slideIndex = 0;
    const slides = document.querySelectorAll('.simage');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function showSlide(index) {
        if (!slides.length) return;
        
        if (index >= slides.length) slideIndex = 0;
        else if (index < 0) slideIndex = slides.length - 1;
        else slideIndex = index;

        slides.forEach((slide, i) => {
            slide.style.display = (i === slideIndex) ? 'block' : 'none';
        });
    }

    if (slides.length > 0) {
        showSlide(slideIndex);
        let autoSlide = setInterval(() => showSlide(slideIndex + 1), 5000);

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                clearInterval(autoSlide);
                showSlide(slideIndex - 1);
                autoSlide = setInterval(() => showSlide(slideIndex + 1), 5000);
            });

            nextBtn.addEventListener('click', () => {
                clearInterval(autoSlide);
                showSlide(slideIndex + 1);
                autoSlide = setInterval(() => showSlide(slideIndex + 1), 5000);
            });
        }
    }
});