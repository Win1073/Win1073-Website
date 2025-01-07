// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll for cards
const cards = document.querySelectorAll('.card');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Create stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 1.5}s`;
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        starsContainer.appendChild(star);
    }
}

createStars();

// Create floating stars for the Windows badge
function createBadgeStars() {
    const starsContainer = document.getElementById('badge-stars');
    const numberOfStars = 8;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'badge-star';
        star.style.left = `${85 + Math.random() * 15}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.height = `${Math.random() * 20 + 40}px`;
        starsContainer.appendChild(star);
    }

    // Continuously add new stars
    setInterval(() => {
        const star = document.createElement('div');
        star.className = 'badge-star';
        star.style.left = `${85 + Math.random() * 15}%`;
        star.style.height = `${Math.random() * 20 + 40}px`;
        starsContainer.appendChild(star);
        
        // Remove star after animation completes
        setTimeout(() => {
            star.remove();
        }, 3000);
    }, 400);
}

createBadgeStars(); 