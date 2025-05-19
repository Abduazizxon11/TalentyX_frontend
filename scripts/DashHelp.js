
document.addEventListener('DOMContentLoaded', function() {
  // Dropdown functionality
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
  });

  // Article feedback buttons
  const yesButtons = document.querySelectorAll('.btn-yes');
  const noButtons = document.querySelectorAll('.btn-no');

  yesButtons.forEach(button => {
    button.addEventListener('click', function() {
      const article = this.closest('.help-article');
      const feedback = article.querySelector('.article-feedback');
      feedback.innerHTML = '<p>Thank you for your feedback!</p>';
    });
  });

  noButtons.forEach(button => {
    button.addEventListener('click', function() {
      const article = this.closest('.help-article');
      const feedback = article.querySelector('.article-feedback');
      feedback.innerHTML = '<p>Thank you for your feedback! We\'ll try to improve this article.</p>';
    });
  });

  // Mobile sidebar toggle (for responsive design)
  const chatButton = document.querySelector('.chat-button');
  chatButton.addEventListener('click', function() {
    alert('Chat functionality would open here');
  });

  // More options functionality
  const moreButtons = document.querySelectorAll('.more-options');
  moreButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert('More options would open here');
    });
  });
});