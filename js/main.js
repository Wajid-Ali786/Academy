// Slider functionality
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }
    const offset = -currentSlide * 100; // Move the container by 100% for each slide
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

// Auto-slide functionality (optional)
setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000); // Slide every 5 seconds

// Mobile menu toggle
const navLinks = document.querySelector('.nav-links');
const menuToggleButton = document.createElement('button');
menuToggleButton.classList.add('menu-toggle');
menuToggleButton.innerHTML = '&#9776;'; // Hamburger icon

// Insert the menu toggle button into the header
document.querySelector('header .container').appendChild(menuToggleButton);

menuToggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
});

// Scroll-to-top button (optional)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.classList.add('scroll-to-top');
scrollToTopButton.innerHTML = '↑';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
