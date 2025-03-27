// Blush and Bloom - About JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all about page functions
    initTabNavigation();
    initContactForm();
});

// Tab Navigation for About Page
function initTabNavigation() {
    const tabLinks = document.querySelectorAll('.tab-link');
    
    if (!tabLinks.length) return;
    
    // Add click event to each tab link
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target section id
            const targetId = this.getAttribute('href');
            
            // Remove active class from all links
            tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Scroll to the target section
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active tab based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        // Get all sections
        const sections = document.querySelectorAll('.about-section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all links
                tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.tab-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real implementation, you would send the form data to a server
        // For now, we'll just show a success message
        
        // Validate form
        if (validateForm(this)) {
            // Show success message
            const formContent = this.querySelector('.form-content');
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                <button class="btn btn-primary reset-form">Send Another Message</button>
            `;
            
            formContent.innerHTML = '';
            formContent.appendChild(successMessage);
            
            // Add event listener to reset form button
            const resetButton = formContent.querySelector('.reset-form');
            if (resetButton) {
                resetButton.addEventListener('click', function() {
                    contactForm.reset();
                    formContent.innerHTML = '';
                    contactForm.appendChild(document.querySelector('.form-content-original').cloneNode(true));
                });
            }
        }
    });
    
    // Clone original form content for reset functionality
    const originalFormContent = contactForm.querySelector('.form-content').cloneNode(true);
    originalFormContent.classList.add('form-content-original');
    originalFormContent.style.display = 'none';
    contactForm.appendChild(originalFormContent);
}

// Form Validation
function validateForm(form) {
    let isValid = true;
    
    // Get all required inputs
    const requiredInputs = form.querySelectorAll('[required]');
    
    // Check each required input
    requiredInputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, 'This field is required');
            isValid = false;
        } else {
            removeError(input);
            
            // Additional validation for email
            if (input.type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    showError(input, 'Please enter a valid email address');
                    isValid = false;
                }
            }
        }
    });
    
    return isValid;
}

// Show error message
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    let errorElement = formGroup.querySelector('.error-message');
    
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    input.classList.add('error');
}

// Remove error message
function removeError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    input.classList.remove('error');
}

// Add styles for form validation and success message
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .error-message {
            color: #e74c3c;
            font-size: 1.3rem;
            margin-top: 0.5rem;
        }
        
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: #e74c3c;
        }
        
        .success-message {
            text-align: center;
            padding: 3rem;
        }
        
        .success-icon {
            font-size: 5rem;
            color: #2ecc71;
            margin-bottom: 2rem;
        }
        
        .success-message h3 {
            font-family: var(--font-primary);
            font-size: 2.8rem;
            color: var(--color-plum);
            margin-bottom: 1.5rem;
        }
        
        .success-message p {
            font-size: 1.6rem;
            margin-bottom: 3rem;
        }
    `;
    document.head.appendChild(style);
});
