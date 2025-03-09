    // JavaScript for scroll animations
    document.addEventListener('DOMContentLoaded', function() {
        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Apply animations when elements come into view
        function handleScrollAnimation() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            fadeElements.forEach(element => {
                if (isInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        }
        
        // Initial check on page load
        handleScrollAnimation();
        
        // Check on scroll
        window.addEventListener('scroll', handleScrollAnimation);
    });