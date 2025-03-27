// Blush and Bloom - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileMenu();
    initTestimonialSlider();
    initSmoothScrolling();
    initHeaderScroll();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (!menuToggle || !navList) return;
    
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        
        // Toggle between hamburger and close icon
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navList.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside && navList.classList.contains('active')) {
            navList.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Add CSS for mobile menu when active
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-list.active {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: rgba(255, 249, 240, 0.95);
                padding: 2rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                z-index: 1000;
            }
            
            .nav-list.active .nav-item {
                margin: 1rem 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Testimonial Slider
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const indicators = document.querySelectorAll('.testimonial-indicator');
    const prevBtn = document.querySelector('.testimonial-control.prev');
    const nextBtn = document.querySelector('.testimonial-control.next');
    
    if (!slides.length || !indicators.length) return;
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Deactivate all indicators
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
        });
        
        // Show the current slide and activate its indicator
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
        
        // Update current slide index
        currentSlide = index;
    }
    
    // Event listeners for prev/next buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            let newIndex = currentSlide - 1;
            if (newIndex < 0) newIndex = slideCount - 1;
            showSlide(newIndex);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            let newIndex = currentSlide + 1;
            if (newIndex >= slideCount) newIndex = 0;
            showSlide(newIndex);
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(function() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slideCount) newIndex = 0;
        showSlide(newIndex);
    }, 5000);
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'rgba(255, 249, 240, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '2rem 0';
            header.style.backgroundColor = 'rgba(255, 249, 240, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Form Validation for Contact Form
function validateForm(formElement) {
    const nameInput = formElement.querySelector('input[name="name"]');
    const emailInput = formElement.querySelector('input[name="email"]');
    const messageInput = formElement.querySelector('textarea[name="message"]');
    
    let isValid = true;
    
    // Validate name
    if (nameInput && nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name');
        isValid = false;
    } else if (nameInput) {
        removeError(nameInput);
    }
    
    // Validate email
    if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Please enter your email');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            removeError(emailInput);
        }
    }
    
    // Validate message
    if (messageInput && messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter your message');
        isValid = false;
    } else if (messageInput) {
        removeError(messageInput);
    }
    
    return isValid;
}

// Helper function to show error message
function showError(inputElement, message) {
    const formGroup = inputElement.closest('.form-group');
    if (!formGroup) return;
    
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    inputElement.classList.add('error');
}

// Helper function to remove error message
function removeError(inputElement) {
    const formGroup = inputElement.closest('.form-group');
    if (!formGroup) return;
    
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    
    inputElement.classList.remove('error');
}

// Add event listener for contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // In a real implementation, you would send the form data to a server
                // For now, we'll just show a success message
                const formContent = this.querySelector('.form-content');
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon!</p>
                `;
                
                formContent.innerHTML = '';
                formContent.appendChild(successMessage);
            }
        });
    }
});
