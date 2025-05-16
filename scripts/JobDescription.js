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
  const applicationMenu = document.getElementById('applicationMenu');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeMenuButton = document.getElementById('closeMenu');
  const textArea = document.querySelector('.text-area-input');
  const charCounter = document.querySelector('.character-counter');
  const fileInput = document.getElementById('resume-upload');
  const fileNameDisplay = document.getElementById('file-name-display');
  const submitButton = document.getElementById('submit-application');

  // Function to update character count
  function updateCharCount() {
    const count = textArea.value.length;
    charCounter.textContent = `${count} / 500`;
  }

  // Function to handle file upload
  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
      fileNameDisplay.textContent = file.name;
    }
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');
    closeMenu();
  }

  // Function to open menu
  function openMenu() {
    modalOverlay.style.display = 'block';
    applicationMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Function to close menu
  function closeMenu() {
    modalOverlay.style.display = 'none';
    applicationMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Event listeners
  applyButton.addEventListener('click', openMenu);
  closeMenuButton.addEventListener('click', closeMenu);
  modalOverlay.addEventListener('click', closeMenu);
  textArea.addEventListener('input', updateCharCount);
  fileInput.addEventListener('change', handleFileUpload);
  submitButton.addEventListener('click', handleSubmit);

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideMenu = applicationMenu.contains(event.target);
    const isClickOnApplyButton = applyButton.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnApplyButton && applicationMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Initialize character count
  updateCharCount();

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