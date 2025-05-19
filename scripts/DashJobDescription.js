
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Share button functionality
  const shareBtn = document.querySelector('.share-btn');
  
  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      // In a real implementation, you would show sharing options
      console.log('Share button clicked');
      alert('Sharing options would appear here in a real implementation');
    });
  }
  
  // Apply button functionality
  const applyBtn = document.querySelector('.apply-btn');
  
  if (applyBtn) {
    applyBtn.addEventListener('click', function() {
      // In a real implementation, you would navigate to application form or show a modal
      console.log('Apply button clicked');
      alert('Application form would appear here in a real implementation');
    });
  }
  
  // Company link functionality
  const companyLink = document.querySelector('.company-link');
  
  if (companyLink) {
    companyLink.addEventListener('click', function(e) {
      // Prevent default to avoid page navigation in this demo
      e.preventDefault();
      console.log('Company link clicked');
      alert('This would navigate to the company profile page in a real implementation');
    });
  }
  
  // Back button functionality
  const backButton = document.querySelector('.back-button');
  
  if (backButton) {
    backButton.addEventListener('click', function(e) {
      // Prevent default to avoid page navigation in this demo
      e.preventDefault();
      console.log('Back button clicked');
      // In a real implementation, this would navigate back
    });
  }
  
  // Make navigation items clickable
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default to avoid page navigation in this demo
      e.preventDefault();
      
      // Remove active class from all nav items
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Add active class to parent nav item
      this.closest('.nav-item').classList.add('active');
      
      console.log('Navigation to:', this.querySelector('span').textContent);
    });
  });
  
  // Responsive sidebar toggle (would be added in a real implementation)
  function setupResponsiveNav() {
    // This would be implemented in a real application for mobile view
    // to toggle the sidebar visibility
  }
  
  // Initialize responsive functionality
  setupResponsiveNav();
});