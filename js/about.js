// Blush and Bloom - About JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tab navigation
    initTabNavigation();
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
