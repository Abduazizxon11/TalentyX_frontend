
// Variables for DOM elements
let emailInput;
let newsletterForm;

// Functions
function handleSubscribe(e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  
  if (email) {
    alert(`Subscribed with email: ${email}`);
    emailInput.value = "";
  } else {
    alert("Please enter an email address");
  }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  emailInput = document.getElementById('email-input');
  newsletterForm = document.getElementById('newsletter-form');
  
  // Add submit event listener to newsletter form
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleSubscribe);
  }
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const href = this.getAttribute('href');
    if (href !== '#') {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});