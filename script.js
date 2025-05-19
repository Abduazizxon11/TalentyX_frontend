// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Show the corresponding content
      const tabId = button.dataset.tab;
      document.getElementById(`${tabId}-tab`).classList.add('active');
    });
  });

  // Profile photo upload functionality
  const photoUploadArea = document.querySelector('.photo-upload-area');
  const profilePhoto = document.querySelector('.profile-photo img');
  
  if (photoUploadArea && profilePhoto) {
    // Create file input
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Handle click on upload area
    photoUploadArea.addEventListener('click', () => {
      fileInput.click();
    });

    // Handle file selection
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
          profilePhoto.src = event.target.result;
        };
        
        reader.readAsDataURL(e.target.files[0]);
      }
    });

    // Handle drag and drop
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      photoUploadArea.addEventListener(eventName, preventDefaults, false);
    });
    
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    ['dragenter', 'dragover'].forEach(eventName => {
      photoUploadArea.addEventListener(eventName, highlight, false);
    });
    
    ['dragleave', 'drop'].forEach(eventName => {
      photoUploadArea.addEventListener(eventName, unhighlight, false);
    });
    
    function highlight() {
      photoUploadArea.style.backgroundColor = '#f8fafc';
    }
    
    function unhighlight() {
      photoUploadArea.style.backgroundColor = '';
    }
    
    photoUploadArea.addEventListener('drop', handleDrop, false);
    
    function handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;
      
      if (files && files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(event) {
          profilePhoto.src = event.target.result;
        };
        
        reader.readAsDataURL(files[0]);
      }
    }
  }

  // Form submission handlers
  const updateEmailButton = document.querySelector('.update-email-button');
  const changePasswordButton = document.querySelector('.change-password-button');
  const updateNotificationsButton = document.querySelector('.update-notifications-button');

  if (updateEmailButton) {
    updateEmailButton.addEventListener('click', () => {
      const emailInput = document.querySelector('.update-email-form input');
      if (emailInput && emailInput.value) {
        // Here you would typically make an API call to update the email
        alert('Email updated successfully!');
        emailInput.value = '';
      } else {
        alert('Please enter a valid email address');
      }
    });
  }

  if (changePasswordButton) {
    changePasswordButton.addEventListener('click', () => {
      const oldPassword = document.querySelector('.password-field input[type="password"]:first-of-type');
      const newPassword = document.querySelector('.password-field input[type="password"]:last-of-type');
      
      if (oldPassword && newPassword && oldPassword.value && newPassword.value) {
        if (oldPassword.value.length < 8 || newPassword.value.length < 8) {
          alert('Both passwords must be at least 8 characters long');
          return;
        }
        
        // Here you would typically make an API call to update the password
        alert('Password changed successfully!');
        oldPassword.value = '';
        newPassword.value = '';
      } else {
        alert('Please fill in both password fields');
      }
    });
  }

  if (updateNotificationsButton) {
    updateNotificationsButton.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.notification-option input[type="checkbox"]');
      const preferences = {};
      
      checkboxes.forEach(checkbox => {
        preferences[checkbox.id] = checkbox.checked;
      });
      
      // Here you would typically make an API call to update notification preferences
      console.log('Notification preferences:', preferences);
      alert('Notification preferences updated successfully!');
    });
  }

  // Back button functionality
  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      // Here you would typically navigate back to the homepage
      console.log('Navigating back to homepage');
    });
  }

  // Notification panel functionality
  const notificationButton = document.getElementById('notificationButton');
  const notificationPanel = document.getElementById('notificationPanel');
  const markReadButton = document.querySelector('.mark-read');
  
  // Toggle notification panel
  notificationButton.addEventListener('click', function(event) {
    event.stopPropagation();
    notificationPanel.classList.toggle('show');
  });
  
  // Mark all as read functionality
  markReadButton.addEventListener('click', function() {
    const notificationDot = document.querySelector('.notification-dot');
    notificationDot.style.display = 'none';
    
    // You could also add code here to mark notifications as read in a database
    console.log('Marked all notifications as read');
  });
  
  // Close the panel when clicking outside
  document.addEventListener('click', function(event) {
    if (!notificationPanel.contains(event.target) && event.target !== notificationButton) {
      notificationPanel.classList.remove('show');
    }
  });
  
  // Prevent panel from closing when clicking inside it
  notificationPanel.addEventListener('click', function(event) {
    event.stopPropagation();
  });
}); 