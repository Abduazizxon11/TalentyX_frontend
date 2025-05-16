
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Handle form submission for newsletter subscription
  const subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('email-input');
      const email = emailInput.value.trim();
      
      if (email) {
        // In a real application, you would send this to a server
        console.log('Subscribing email:', email);
        
        // Reset the form
        emailInput.value = '';
        
        // Show success message (could be improved with a proper toast/notification)
        alert('Thank you for subscribing!');
      }
    });
  }

  // Add hover effect for job cards
  const jobCards = document.querySelectorAll('.job-card');
  jobCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });

  // Add active states for buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.98)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Smoothly scroll to sections when clicking on navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add smooth scrolling for breadcrumb links
  const breadcrumbLinks = document.querySelectorAll('.breadcrumb a');
  breadcrumbLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // This would be implemented when those pages exist
      console.log('Navigate to:', this.getAttribute('href'));
    });
  });

  // Save job functionality
  const saveButton = document.querySelector('.btn-save');
  if (saveButton) {
    saveButton.addEventListener('click', function() {
      // Toggle saved state (in a real app, this would interact with backend)
      const isSaved = this.classList.toggle('saved');
      
      if (isSaved) {
        console.log('Job saved!');
        // You could change the image to a filled bookmark/heart
      } else {
        console.log('Job unsaved!');
        // You could change the image back to an outline bookmark/heart
      }
    });
  }

  // Apply button functionality
  const applyButton = document.querySelector('.btn-apply');
  if (applyButton) {
    applyButton.addEventListener('click', function() {
      console.log('Apply for job clicked!');
      // In a real application, this would open a modal or navigate to application page
      alert('Application feature would open here!');
    });
  }

  // Add animation for company section images on scroll
  const companyImages = document.querySelectorAll('.company-image-main, .company-image-small');
  
  // Simple function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll animation
  function handleScroll() {
    companyImages.forEach(img => {
      if (isInViewport(img) && !img.classList.contains('animated')) {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
          img.style.opacity = '1';
          img.style.transform = 'translateY(0)';
          img.classList.add('animated');
        }, 300);
      }
    });
  }
  
  // Run once on page load
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});