// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.principle-section');
    
    // Highlight active navigation item based on scroll position
    function highlightActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', highlightActiveNav);
    
    // Add click handlers for smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add keyboard navigation for principle cards
    const principleCards = document.querySelectorAll('.principle-card');
    
    principleCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Toggle a "focused" class for better readability
                this.classList.toggle('focused');
                
                // Remove focus from other cards
                principleCards.forEach(otherCard => {
                    if (otherCard !== this) {
                        otherCard.classList.remove('focused');
                    }
                });
            }
        });
    });
    
    
    // Initialize page
    highlightActiveNav();
});

// Add CSS for focused cards
const style = document.createElement('style');
style.textContent = `
    .principle-card.focused {
        background-color: #e8f4f8;
        border-left-color: #2980b9;
        box-shadow: 0 4px 15px rgba(52, 152, 219, 0.2);
    }
    
    .nav-link.active {
        color: #2c3e50;
        border-bottom-color: #3498db;
        font-weight: 500;
    }
    
`;
document.head.appendChild(style);
