
// JavaScript for JobHuntly Dashboard

document.addEventListener('DOMContentLoaded', function() {
  // Back to homepage button functionality
  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.addEventListener('click', function() {
      console.log('Navigating back to homepage...');
    });
  }

  // View All Applications button functionality
  const viewAllButtons = document.querySelectorAll('.view-all');
  viewAllButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Viewing all applications...');
    });
  });

  // View all applications history button functionality
  const viewHistoryButton = document.querySelector('.view-history-link');
  if (viewHistoryButton) {
    viewHistoryButton.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Viewing applications history...');
    });
  }

  // Action icons click functionality
  const actionIcons = document.querySelectorAll('.action-btn');
  actionIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      console.log('Opening actions menu...');
    });
  });

  // Navigation item click functionality
  const navItems = document.querySelectorAll('.nav-item:not(.active)');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const itemText = item.querySelector('span').textContent.trim();
      console.log('Navigating to', itemText);
    });
  });

  // Notification icon click functionality
  const notificationIcon = document.querySelector('.notification-icon');
  if (notificationIcon) {
    notificationIcon.addEventListener('click', function() {
      console.log('Opening notifications panel...');
    });
  }
  
  // Interview navigation arrows functionality
  const prevArrow = document.querySelector('.nav-arrow.prev');
  const nextArrow = document.querySelector('.nav-arrow.next');
  
  if (prevArrow) {
    prevArrow.addEventListener('click', function() {
      console.log('Viewing previous day interviews...');
    });
  }
  
  if (nextArrow) {
    nextArrow.addEventListener('click', function() {
      console.log('Viewing next day interviews...');
    });
  }

  console.log('Dashboard loaded successfully!');
});