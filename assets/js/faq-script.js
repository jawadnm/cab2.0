// JavaScript for FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Check if current item is already active
        const isActive = item.classList.contains('active');
        
        // Close all items first
        faqItems.forEach(faq => {
          faq.classList.remove('active');
        });
        
        // If clicked item wasn't active before, make it active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  });