// Carousel state management
const carousels = {
    1: { currentIndex: 0, totalImages: 3 },
    2: { currentIndex: 0, totalImages: 3 },
    3: { currentIndex: 0, totalImages: 2 },
    4: { currentIndex: 0, totalImages: 2 }
};

// DOM elements
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const header = document.getElementById('header');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeScrollAnimations();
    initializeCarousels();
});

// Event listeners setup
function initializeEventListeners() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            mobileMenu.classList.remove('active');
        }
    });
}

// Scroll animations with Intersection Observer
function initializeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));
}

// Initialize all carousels
function initializeCarousels() {
    Object.keys(carousels).forEach(carouselId => {
        updateCarousel(parseInt(carouselId));
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu after clicking
    mobileMenu.classList.remove('active');
}

// Carousel functionality
function updateCarousel(carouselId) {
    const carousel = document.getElementById(`carousel-${carouselId}`);
    if (!carousel) return;
    
    const images = carousel.querySelectorAll('.carousel-image');
    const counter = carousel.parentElement.querySelector('.carousel-counter');
    const currentIndex = carousels[carouselId].currentIndex;
    
    // Update images
    images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
    });
    
    // Update counter
    if (counter) {
        const currentSpan = counter.querySelector('.current');
        if (currentSpan) {
            currentSpan.textContent = currentIndex + 1;
        }
    }
}

function nextImage(carouselId) {
    const carousel = carousels[carouselId];
    if (!carousel) return;
    
    carousel.currentIndex = (carousel.currentIndex + 1) % carousel.totalImages;
    updateCarousel(carouselId);
}

function prevImage(carouselId) {
    const carousel = carousels[carouselId];
    if (!carousel) return;
    
    carousel.currentIndex = carousel.currentIndex === 0 
        ? carousel.totalImages - 1 
        : carousel.currentIndex - 1;
    updateCarousel(carouselId);
}

// WhatsApp functionality
function openWhatsApp() {
    const phoneNumber = '554735130720';
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre as escavadeiras RBK.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open in new window/tab
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Optional: Auto-play carousel (commented out by default)
/*
function startAutoPlay() {
    setInterval(() => {
        Object.keys(carousels).forEach(carouselId => {
            nextImage(parseInt(carouselId));
        });
    }, 5000); // Change image every 5 seconds
}

// Uncomment to enable auto-play
// startAutoPlay();
*/

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Add touch/swipe support for carousels on mobile
function initializeTouchSupport() {
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(event) {
        if (event.target.closest('.carousel-wrapper')) {
            touchStartX = event.changedTouches[0].screenX;
        }
    });

    document.addEventListener('touchend', function(event) {
        if (event.target.closest('.carousel-wrapper')) {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe(event.target.closest('.carousel-wrapper'));
        }
    });

    function handleSwipe(carouselWrapper) {
        const carouselImages = carouselWrapper.querySelector('.carousel-images');
        const carouselId = parseInt(carouselImages.id.split('-')[1]);
        
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                nextImage(carouselId);
            } else {
                // Swipe right - previous image
                prevImage(carouselId);
            }
        }
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initializeLazyLoading();
    initializeTouchSupport();
});

// Accessibility: Keyboard navigation for carousels
document.addEventListener('keydown', function(event) {
    const focusedElement = document.activeElement;
    
    if (focusedElement && focusedElement.classList.contains('carousel-btn')) {
        const carouselWrapper = focusedElement.closest('.carousel-wrapper');
        const carouselId = parseInt(carouselWrapper.querySelector('.carousel-images').id.split('-')[1]);
        
        switch(event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                prevImage(carouselId);
                break;
            case 'ArrowRight':
                event.preventDefault();
                nextImage(carouselId);
                break;
        }
    }
});

// Error handling for images
document.addEventListener('error', function(event) {
    if (event.target.tagName === 'IMG') {
        console.warn('Failed to load image:', event.target.src);
        // You can add a placeholder image here if needed
        // event.target.src = 'path/to/placeholder-image.jpg';
    }
}, true);

// Analytics tracking (placeholder - replace with your analytics code)
function trackEvent(eventName, eventData) {
    // Example: Google Analytics 4
    // gtag('event', eventName, eventData);
    
    // Example: Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track carousel interactions
function trackCarouselInteraction(carouselId, action) {
    trackEvent('carousel_interaction', {
        carousel_id: carouselId,
        action: action
    });
}

// Track WhatsApp clicks
function trackWhatsAppClick() {
    trackEvent('whatsapp_click', {
        location: 'floating_button'
    });
}

// Update functions to include tracking
const originalNextImage = nextImage;
const originalPrevImage = prevImage;
const originalOpenWhatsApp = openWhatsApp;

nextImage = function(carouselId) {
    originalNextImage(carouselId);
    trackCarouselInteraction(carouselId, 'next');
};

prevImage = function(carouselId) {
    originalPrevImage(carouselId);
    trackCarouselInteraction(carouselId, 'previous');
};

openWhatsApp = function() {
    trackWhatsAppClick();
    originalOpenWhatsApp();

};
