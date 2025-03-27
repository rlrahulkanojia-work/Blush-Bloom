// Blush and Bloom - Portfolio JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all portfolio functions
    initPortfolioFilters();
    initPortfolioModal();
});

// Portfolio Filtering
function initPortfolioFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (!filterButtons.length || !portfolioItems.length) return;
    
    // Add click event to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Portfolio Modal
function initPortfolioModal() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const modal = document.getElementById('portfolioModal');
    const modalBody = modal ? modal.querySelector('.modal-body') : null;
    const closeModal = modal ? modal.querySelector('.close-modal') : null;
    
    if (!portfolioLinks.length || !modal || !modalBody || !closeModal) return;
    
    // Portfolio data (in a real application, this would come from a database)
    const portfolioData = {
        'bridal': {
            '1': {
                title: 'Traditional Bridal Makeup',
                description: 'This elegant and timeless bridal look features soft, romantic colors that enhance the bride\'s natural beauty. The focus is on creating a flawless complexion, defined eyes with neutral tones, and a soft pink lip that will look beautiful in photographs and last throughout the day.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?bride,makeup,1',
                    'https://source.unsplash.com/random/400x300/?bride,eyes,1',
                    'https://source.unsplash.com/random/400x300/?bride,lips,1',
                    'https://source.unsplash.com/random/400x300/?bride,face,1',
                    'https://source.unsplash.com/random/400x300/?bride,profile,1'
                ],
                details: {
                    'Style': 'Traditional',
                    'Duration': '2 hours',
                    'Best For': 'Classic brides seeking timeless elegance',
                    'Products Used': 'Long-wearing foundation, waterproof mascara, individual lashes, setting spray'
                }
            },
            '2': {
                title: 'Modern Bridal Makeup',
                description: 'This contemporary bridal look combines classic bridal elements with modern trends. It features a luminous skin finish, subtly sculpted cheekbones, and a touch of shimmer on the eyes for a fresh, updated take on bridal beauty that photographs beautifully.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?bride,makeup,2',
                    'https://source.unsplash.com/random/400x300/?bride,eyes,2',
                    'https://source.unsplash.com/random/400x300/?bride,lips,2',
                    'https://source.unsplash.com/random/400x300/?bride,face,2',
                    'https://source.unsplash.com/random/400x300/?bride,profile,2'
                ],
                details: {
                    'Style': 'Modern',
                    'Duration': '2 hours',
                    'Best For': 'Fashion-forward brides who want a contemporary look',
                    'Products Used': 'Illuminating primer, cream highlighter, metallic eyeshadows, nude lip'
                }
            },
            '3': {
                title: 'Minimalist Bridal Makeup',
                description: 'This minimalist approach focuses on enhancing the bride\'s natural features with a light touch. The look features sheer coverage that allows skin to shine through, subtle definition on the eyes, and a natural flush on the cheeks and lips for brides who prefer an understated, "no-makeup" makeup look.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?bride,makeup,3',
                    'https://source.unsplash.com/random/400x300/?bride,eyes,3',
                    'https://source.unsplash.com/random/400x300/?bride,lips,3',
                    'https://source.unsplash.com/random/400x300/?bride,face,3',
                    'https://source.unsplash.com/random/400x300/?bride,profile,3'
                ],
                details: {
                    'Style': 'Minimalist',
                    'Duration': '1.5 hours',
                    'Best For': 'Natural brides who want to look like themselves',
                    'Products Used': 'Tinted moisturizer, cream blush, brown mascara, tinted lip balm'
                }
            },
            '4': {
                title: 'Cultural Bridal Makeup',
                description: 'This look honors traditional cultural elements while incorporating modern makeup techniques. It features rich, vibrant colors and intricate details that complement traditional wedding attire while ensuring the makeup photographs beautifully and lasts through cultural ceremonies.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?bride,makeup,4',
                    'https://source.unsplash.com/random/400x300/?bride,eyes,4',
                    'https://source.unsplash.com/random/400x300/?bride,lips,4',
                    'https://source.unsplash.com/random/400x300/?bride,face,4',
                    'https://source.unsplash.com/random/400x300/?bride,profile,4'
                ],
                details: {
                    'Style': 'Cultural',
                    'Duration': '2.5 hours',
                    'Best For': 'Brides celebrating cultural traditions',
                    'Products Used': 'Full-coverage foundation, vibrant eyeshadows, bold lip colors, setting powder'
                }
            }
        },
        'pre-wedding': {
            '5': {
                title: 'Engagement Shoot Makeup',
                description: 'This camera-ready look is designed specifically for engagement photoshoots. It features a balance of natural and defined elements that photograph beautifully in various lighting conditions, with special attention to creating dimension that will look stunning in both color and black-and-white photos.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?engagement,makeup,1',
                    'https://source.unsplash.com/random/400x300/?engagement,eyes,1',
                    'https://source.unsplash.com/random/400x300/?engagement,lips,1',
                    'https://source.unsplash.com/random/400x300/?engagement,face,1',
                    'https://source.unsplash.com/random/400x300/?engagement,profile,1'
                ],
                details: {
                    'Style': 'Photo-Ready',
                    'Duration': '1.5 hours',
                    'Best For': 'Engagement and pre-wedding photoshoots',
                    'Products Used': 'Photo-friendly foundation, matte eyeshadows, defined brows, natural-tone lip'
                }
            },
            '6': {
                title: 'Themed Photoshoot Makeup',
                description: 'This creative look is customized for themed pre-wedding photoshoots. Whether it\'s vintage-inspired, bohemian, or editorial, the makeup is tailored to complement the theme while ensuring the bride looks her best, with special attention to elements that will enhance the storytelling aspect of the photos.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?engagement,makeup,2',
                    'https://source.unsplash.com/random/400x300/?engagement,eyes,2',
                    'https://source.unsplash.com/random/400x300/?engagement,lips,2',
                    'https://source.unsplash.com/random/400x300/?engagement,face,2',
                    'https://source.unsplash.com/random/400x300/?engagement,profile,2'
                ],
                details: {
                    'Style': 'Themed',
                    'Duration': '2 hours',
                    'Best For': 'Creative, themed pre-wedding shoots',
                    'Products Used': 'Varies based on theme - can include bold colors, special effects, or period-appropriate techniques'
                }
            },
            '7': {
                title: 'Destination Pre-Wedding Makeup',
                description: 'This look is specially designed for destination pre-wedding shoots, taking into account climate conditions and lighting. It features weather-appropriate products that will hold up in humidity, heat, or wind, while creating a fresh, radiant appearance that complements the destination setting.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?engagement,makeup,3',
                    'https://source.unsplash.com/random/400x300/?engagement,eyes,3',
                    'https://source.unsplash.com/random/400x300/?engagement,lips,3',
                    'https://source.unsplash.com/random/400x300/?engagement,face,3',
                    'https://source.unsplash.com/random/400x300/?engagement,profile,3'
                ],
                details: {
                    'Style': 'Destination-Appropriate',
                    'Duration': '1.5 hours',
                    'Best For': 'Outdoor and destination photoshoots',
                    'Products Used': 'Waterproof formulas, humidity-resistant foundation, long-wearing cream products'
                }
            }
        },
        'custom': {
            '8': {
                title: 'Party Glam Makeup',
                description: 'This glamorous look is perfect for special celebrations and parties. It features dimensional shimmer on the eyes, a perfected complexion, and a touch of drama that will look stunning in both natural and artificial lighting, ensuring you stand out at any event.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?party,makeup,1',
                    'https://source.unsplash.com/random/400x300/?party,eyes,1',
                    'https://source.unsplash.com/random/400x300/?party,lips,1',
                    'https://source.unsplash.com/random/400x300/?party,face,1',
                    'https://source.unsplash.com/random/400x300/?party,profile,1'
                ],
                details: {
                    'Style': 'Glamorous',
                    'Duration': '1.5 hours',
                    'Best For': 'Evening parties and celebrations',
                    'Products Used': 'Illuminating foundation, metallic eyeshadows, false lashes, highlighter'
                }
            },
            '9': {
                title: 'Gala Event Makeup',
                description: 'This sophisticated look is designed for formal galas and black-tie events. It features elegant definition, strategic highlighting, and refined color choices that complement formal attire while photographing beautifully under various lighting conditions throughout the evening.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?gala,makeup,1',
                    'https://source.unsplash.com/random/400x300/?gala,eyes,1',
                    'https://source.unsplash.com/random/400x300/?gala,lips,1',
                    'https://source.unsplash.com/random/400x300/?gala,face,1',
                    'https://source.unsplash.com/random/400x300/?gala,profile,1'
                ],
                details: {
                    'Style': 'Sophisticated',
                    'Duration': '1.5 hours',
                    'Best For': 'Formal galas and black-tie events',
                    'Products Used': 'Satin-finish foundation, smokey eyeshadows, defined contour, classic lip colors'
                }
            },
            '10': {
                title: 'Prom Night Makeup',
                description: 'This age-appropriate glamour look is perfect for prom and formal dances. It features fresh, youthful elements with touches of sparkle and color that complement formal attire while ensuring the makeup looks beautiful in photos and lasts through a night of dancing.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?prom,makeup,1',
                    'https://source.unsplash.com/random/400x300/?prom,eyes,1',
                    'https://source.unsplash.com/random/400x300/?prom,lips,1',
                    'https://source.unsplash.com/random/400x300/?prom,face,1',
                    'https://source.unsplash.com/random/400x300/?prom,profile,1'
                ],
                details: {
                    'Style': 'Youthful Glamour',
                    'Duration': '1.5 hours',
                    'Best For': 'Prom, homecoming, and formal school events',
                    'Products Used': 'Buildable foundation, shimmer eyeshadows, lengthening mascara, glossy lip'
                }
            },
            '11': {
                title: 'Editorial Makeup',
                description: 'This creative look pushes boundaries for editorial photoshoots and artistic projects. It features innovative techniques, unexpected color combinations, and artistic elements that create visual interest and tell a story through makeup artistry.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?editorial,makeup,1',
                    'https://source.unsplash.com/random/400x300/?editorial,eyes,1',
                    'https://source.unsplash.com/random/400x300/?editorial,lips,1',
                    'https://source.unsplash.com/random/400x300/?editorial,face,1',
                    'https://source.unsplash.com/random/400x300/?editorial,profile,1'
                ],
                details: {
                    'Style': 'Creative/Artistic',
                    'Duration': '2+ hours',
                    'Best For': 'Editorial photoshoots and artistic projects',
                    'Products Used': 'Pigmented eyeshadows, artistic liners, unconventional colors and textures'
                }
            },
            '12': {
                title: 'Celebrity-Inspired Makeup',
                description: 'This look recreates iconic celebrity makeup styles while adapting them to suit individual features. Whether it\'s a red carpet look or a signature celebrity style, the makeup is customized to flatter your unique features while capturing the essence of the inspiration.',
                images: [
                    'https://source.unsplash.com/random/800x1000/?celebrity,makeup,1',
                    'https://source.unsplash.com/random/400x300/?celebrity,eyes,1',
                    'https://source.unsplash.com/random/400x300/?celebrity,lips,1',
                    'https://source.unsplash.com/random/400x300/?celebrity,face,1',
                    'https://source.unsplash.com/random/400x300/?celebrity,profile,1'
                ],
                details: {
                    'Style': 'Celebrity-Inspired',
                    'Duration': '1.5 hours',
                    'Best For': 'Those wanting to recreate famous looks',
                    'Products Used': 'Varies based on the celebrity look being recreated'
                }
            }
        }
    };
    
    // Add click event to each portfolio link
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get portfolio item data
            const category = this.getAttribute('data-category');
            const id = this.getAttribute('data-id');
            
            if (portfolioData[category] && portfolioData[category][id]) {
                const item = portfolioData[category][id];
                
                // Create modal content
                let modalContent = `
                    <div class="portfolio-detail">
                        <div class="detail-images">
                            <div class="detail-main-image">
                                <img src="${item.images[0]}" alt="${item.title}">
                            </div>
                            <div class="detail-thumbnails">
                `;
                
                // Add thumbnails
                item.images.forEach((image, index) => {
                    if (index > 0) { // Skip the first image as it's already the main image
                        modalContent += `
                            <div class="detail-thumbnail" data-image="${image}">
                                <img src="${image}" alt="${item.title} - Image ${index + 1}">
                            </div>
                        `;
                    }
                });
                
                modalContent += `
                            </div>
                        </div>
                        <div class="detail-info">
                            <h2>${item.title}</h2>
                            <p>${item.description}</p>
                            <div class="detail-meta">
                `;
                
                // Add details
                for (const [key, value] of Object.entries(item.details)) {
                    modalContent += `
                        <div class="meta-item">
                            <div class="meta-label">${key}:</div>
                            <div class="meta-value">${value}</div>
                        </div>
                    `;
                }
                
                modalContent += `
                            </div>
                        </div>
                    </div>
                `;
                
                // Set modal content
                modalBody.innerHTML = modalContent;
                
                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                
                // Add click event to thumbnails
                const thumbnails = modalBody.querySelectorAll('.detail-thumbnail');
                const mainImage = modalBody.querySelector('.detail-main-image img');
                
                thumbnails.forEach(thumbnail => {
                    thumbnail.addEventListener('click', function() {
                        const imageUrl = this.getAttribute('data-image');
                        mainImage.src = imageUrl;
                    });
                });
            }
        });
    });
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
}
