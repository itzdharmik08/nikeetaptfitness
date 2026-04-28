// FitFlow - Main JavaScript

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Booking Form
const form = document.getElementById('booking-form');
const thankYou = document.getElementById('thank-you');

// Clear validation on input
function clearValidation(e) {
    if (e.target.value.trim()) {
        e.target.classList.remove('border-red-500');
        e.target.classList.remove('ring-2');
        e.target.classList.remove('ring-red-200');
    }
}

// Add input listeners to clear validation
document.querySelectorAll('input[required], select[required]').forEach(field => {
    field.addEventListener('input', clearValidation);
    field.addEventListener('change', clearValidation);
});

// Form submission
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all required fields
    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allValid = false;
            field.classList.add('border-red-500');
            field.classList.add('ring-2');
            field.classList.add('ring-red-200');
        } else {
            field.classList.remove('border-red-500');
            field.classList.remove('ring-2');
            field.classList.remove('ring-red-200');
        }
    });
    
    if (!allValid) return;
    
    // Get user's first name for thank you message
    const firstName = document.getElementById('firstName')?.value || 'there';
    document.getElementById('user-name').textContent = firstName;
    
    // Hide form, show thank you
    form.classList.add('hidden');
    thankYou.classList.remove('hidden');
    thankYou.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Reset form function (global for onclick)
window.resetForm = function() {
    form?.reset();
    thankYou.classList.add('hidden');
    form.classList.remove('hidden');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Clear any validation errors
    document.querySelectorAll('input[required], select[required]').forEach(field => {
        field.classList.remove('border-red-500');
        field.classList.remove('ring-2');
        field.classList.remove('ring-red-200');
    });
};

// Testimonials Swiper
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
});
