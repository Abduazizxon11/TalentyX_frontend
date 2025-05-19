// Notification Panel Functionality
const notificationButton = document.getElementById('notificationButton');
const notificationPanel = document.getElementById('notificationPanel');
const markReadButton = document.querySelector('.mark-read');

// Toggle notification panel
notificationButton.addEventListener('click', (e) => {
  e.stopPropagation();
  notificationPanel.classList.toggle('active');
});

// Close notification panel when clicking outside
document.addEventListener('click', (e) => {
  if (!notificationPanel.contains(e.target) && !notificationButton.contains(e.target)) {
    notificationPanel.classList.remove('active');
  }
});

// Mark all notifications as read
markReadButton.addEventListener('click', () => {
  const notificationDot = document.querySelector('.notification-dot');
  const notificationTags = document.querySelectorAll('.notification-tag');
  
  // Remove notification dot
  if (notificationDot) {
    notificationDot.style.display = 'none';
  }
  
  // Remove notification tags
  notificationTags.forEach(tag => {
    tag.style.display = 'none';
  });
}); 