function initializeSlider(containerSelector, slideSelector, prevBtnSelector, nextBtnSelector, autoPlayInterval = 0) {
    const container = document.querySelector(containerSelector);
    if (!container) return; // Exit if the container doesn't exist

    const slides = container.querySelectorAll(slideSelector);
    const prevBtn = container.querySelector(prevBtnSelector);
    const nextBtn = container.querySelector(nextBtnSelector);
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
            showSlide(currentIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        });
    }

    showSlide(currentIndex); // Initial show

    if (autoPlayInterval > 0) {
        setInterval(() => {
            currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        }, autoPlayInterval);
    }
}

// Initialize the cultural section slider
initializeSlider(".budaya-section", ".slide", ".prev", ".next");

// Initialize the homepage slideshow with autoplay
initializeSlider(".beranda-slideshow", "img", null, null, 8000);

// Navbar scroll behavior
let lastScrollTop = 0;
const navbar = document.querySelector("header.navbar-container");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > navbarHeight) {
        // Scrolling down, hide the navbar
        navbar.classList.add("hidden");
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove("hidden");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});