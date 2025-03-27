// Blush and Bloom - Services JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all services functions
    initTabNavigation();
    initFaqAccordion();
});

// Tab Navigation for Services
function initTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.services-tab-content');
    
    if (!tabButtons.length || !tabContents.length) return;
    
    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get tab value
            const tabValue = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabValue).classList.add('active');
            
            // Scroll to top of tab content
            window.scrollTo({
                top: document.querySelector('.services-nav').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
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

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that have a hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target element
            const targetId = this.getAttribute('href');
            
            // If the target is just "#", do nothing
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            // If the target element exists
            if (targetElement) {
                e.preventDefault();
                
                // Get the header height for offset
                const headerHeight = document.querySelector('.header').offsetHeight;
                
                // Calculate the target position
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                // Scroll to the target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
