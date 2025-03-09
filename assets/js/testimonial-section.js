document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('testimonialsTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentIndex = 0;
  let autoScrollInterval;
  
  // Get card width based on screen size
  function getCardWidth() {
    if (window.innerWidth <= 576) {
      return 320; // card (280px) + gap (40px)
    } else if (window.innerWidth <= 768) {
      return 340; // card (300px) + gap (40px)
    } else if (window.innerWidth <= 991) {
      return 380; // card (340px) + gap (40px)
    } else if (window.innerWidth <= 1200) {
      return 400; // card (360px) + gap (40px)
    }
    return 420; // default: card (380px) + gap (40px)
  }
  
  // Add active class to visible cards
  function updateActiveCards() {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }
  
  function scrollTestimonials(direction = 'next') {
    if (direction === 'next') {
      currentIndex++;
      if (currentIndex >= cards.length / 2) {
        currentIndex = 0;
      }
    } else {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = (cards.length / 2) - 1;
      }
    }
    track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;
    updateActiveCards();
  }
  
  // Manual navigation
  prevBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    scrollTestimonials('prev');
    // Restart auto scroll after manual navigation
    autoScrollInterval = setInterval(() => scrollTestimonials('next'), 3000);
  });
  
  nextBtn.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    scrollTestimonials('next');
    // Restart auto scroll after manual navigation
    autoScrollInterval = setInterval(() => scrollTestimonials('next'), 3000);
  });
  
  // Handle window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      track.style.transform = `translateX(-${currentIndex * getCardWidth()}px)`;
    }, 100);
  });
  
  // Initialize active cards
  updateActiveCards();
  
  // Start auto scroll
  autoScrollInterval = setInterval(() => scrollTestimonials('next'), 3000);
});