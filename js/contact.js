// Blush and Bloom - Contact JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all contact page functions
    initContactForm();
    initFaqAccordion();
});

// Contact Form Handling
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        // Only prevent default if validation fails
        if (!validateForm(this)) {
            e.preventDefault();
            return false;
        }
        
        // If validation passes, let the form submit to Netlify
        // Netlify will handle the form submission and redirect
        return true;
    });
    
    // Clone original form content for reset functionality
    if (!document.querySelector('.form-content-original')) {
        const originalFormContent = contactForm.querySelector('.form-content').cloneNode(true);
        originalFormContent.classList.add('form-content-original');
        originalFormContent.style.display = 'none';
        contactForm.appendChild(originalFormContent);
    }
}

// Form Validation
function validateForm(form) {
    let isValid = true;
    
    // Remove all existing error messages
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
    
    // Remove error class from all inputs
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => input.classList.remove('error'));
    
    // Get all required inputs
    const requiredInputs = form.querySelectorAll('[required]');
    
    // Check each required input
    requiredInputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, 'This field is required');
            isValid = false;
        } else {
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

// FAQ Accordion
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (!faqItems.length) return;
    
    // Add click event to each FAQ question
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Toggle active class on clicked item
                item.classList.toggle('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Update icon
                const icon = this.querySelector('.faq-toggle i');
                if (item.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        }
    });
}

// File Upload Preview
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('reference-images');
    
    if (!fileInput) return;
    
    fileInput.addEventListener('change', function() {
        // Check if files are selected
        if (this.files.length > 0) {
            // Check if preview container exists, if not create it
            let previewContainer = document.querySelector('.file-preview');
            
            if (!previewContainer) {
                previewContainer = document.createElement('div');
                previewContainer.className = 'file-preview';
                this.parentNode.appendChild(previewContainer);
                
                // Add CSS for file preview
                const style = document.createElement('style');
                style.textContent = `
                    .file-preview {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 1rem;
                        margin-top: 1.5rem;
                    }
                    
                    .file-preview-item {
                        width: 100px;
                        height: 100px;
                        border-radius: var(--border-radius);
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .file-preview-item img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .file-preview-item .remove-file {
                        position: absolute;
                        top: 0.5rem;
                        right: 0.5rem;
                        background-color: rgba(0, 0, 0, 0.5);
                        color: white;
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        font-size: 1rem;
                    }
                    
                    .file-preview-item .remove-file:hover {
                        background-color: rgba(231, 76, 60, 0.8);
                    }
                `;
                document.head.appendChild(style);
            } else {
                // Clear existing previews
                previewContainer.innerHTML = '';
            }
            
            // Limit to 3 files
            const maxFiles = 3;
            const filesToPreview = Array.from(this.files).slice(0, maxFiles);
            
            // Create preview for each file
            filesToPreview.forEach((file, index) => {
                // Check if file is an image
                if (!file.type.match('image.*')) return;
                
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const previewItem = document.createElement('div');
                    previewItem.className = 'file-preview-item';
                    previewItem.innerHTML = `
                        <img src="${e.target.result}" alt="Preview">
                        <div class="remove-file" data-index="${index}">
                            <i class="fas fa-times"></i>
                        </div>
                    `;
                    previewContainer.appendChild(previewItem);
                    
                    // Add click event to remove button
                    const removeButton = previewItem.querySelector('.remove-file');
                    removeButton.addEventListener('click', function() {
                        previewItem.remove();
                        
                        // If all previews are removed, remove the container
                        if (previewContainer.children.length === 0) {
                            previewContainer.remove();
                            fileInput.value = '';
                        }
                    });
                };
                
                reader.readAsDataURL(file);
            });
            
            // Show message if more than 3 files were selected
            if (this.files.length > maxFiles) {
                const message = document.createElement('p');
                message.className = 'file-limit-message';
                message.textContent = `Note: Only the first ${maxFiles} files will be uploaded.`;
                message.style.fontSize = '1.3rem';
                message.style.color = '#e67e22';
                message.style.marginTop = '1rem';
                previewContainer.appendChild(message);
            }
        }
    });
});
