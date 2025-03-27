// Blush and Bloom - Blog JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all blog functions
    initCategoryFilters();
    initNewsletterForm();
    initLoadMoreButton();
});

// Category Filtering
function initCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    if (!categoryButtons.length || !blogPosts.length) return;
    
    // Add click event to each category button
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category value
            const category = this.getAttribute('data-category');
            
            // Filter blog posts
            blogPosts.forEach(post => {
                if (category === 'all' || post.classList.contains(category)) {
                    post.style.display = 'block';
                    setTimeout(() => {
                        post.style.opacity = '1';
                        post.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    post.style.opacity = '0';
                    post.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        post.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Add CSS for smooth transitions
    const style = document.createElement('style');
    style.textContent = `
        .blog-post {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        
        if (emailInput && emailInput.value.trim() !== '') {
            // In a real implementation, you would send the email to a server
            // For now, we'll just show a success message
            
            const formGroup = this.querySelector('.form-group');
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Thank you for subscribing! You'll receive our next newsletter soon.</p>
            `;
            
            // Replace form with success message
            formGroup.innerHTML = '';
            formGroup.appendChild(successMessage);
            
            // Hide privacy note
            const privacyNote = this.querySelector('.privacy-note');
            if (privacyNote) {
                privacyNote.style.display = 'none';
            }
            
            // Add CSS for success message
            const style = document.createElement('style');
            style.textContent = `
                .success-message {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    padding: 1.5rem;
                    background-color: #e6f7e9;
                    border-radius: var(--border-radius);
                }
                
                .success-message i {
                    font-size: 2.5rem;
                    color: #2ecc71;
                }
                
                .success-message p {
                    font-size: 1.6rem;
                    margin: 0;
                }
            `;
            document.head.appendChild(style);
        }
    });
}

// Load More Button
function initLoadMoreButton() {
    const loadMoreButton = document.querySelector('.load-more button');
    
    if (!loadMoreButton) return;
    
    loadMoreButton.addEventListener('click', function() {
        // In a real implementation, you would load more posts from a server
        // For now, we'll just show a message
        
        this.innerHTML = 'Loading...';
        
        // Simulate loading delay
        setTimeout(() => {
            this.innerHTML = 'No More Posts';
            this.disabled = true;
            this.style.opacity = '0.5';
            this.style.cursor = 'not-allowed';
        }, 1500);
    });
}

// Handle Read More links
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would navigate to the blog post page
            // For now, we'll just show an alert
            alert('This would navigate to the full blog post in a real implementation.');
        });
    });
    
    // Handle featured post read more button
    const featuredReadMore = document.querySelector('.featured-post-content .btn');
    
    if (featuredReadMore) {
        featuredReadMore.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would navigate to the blog post page
            // For now, we'll just show an alert
            alert('This would navigate to the featured blog post in a real implementation.');
        });
    }
});
