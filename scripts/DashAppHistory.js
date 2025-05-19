
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Tab switching functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
      
      // Get the tab id
      const tabId = this.getAttribute('data-tab');
      
      // Here you would typically show/hide content based on tab
      console.log(`Tab ${tabId} selected`);
      
      // In a real implementation, you would filter the applications table
      // based on the selected tab
    });
  });
  
  // Close button for feature alert
  const closeBtn = document.querySelector('.feature-alert .close-btn');
  const featureAlert = document.querySelector('.feature-alert');
  
  if (closeBtn && featureAlert) {
    closeBtn.addEventListener('click', function() {
      featureAlert.style.display = 'none';
    });
  }
  
  // Search functionality
  const searchInput = document.querySelector('.search-box input');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      const tableRows = document.querySelectorAll('.applications-table tbody tr');
      
      tableRows.forEach(row => {
        const companyName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const role = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
        
        // Show/hide rows based on search term
        if (companyName.includes(searchTerm) || role.includes(searchTerm)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }
  
  // Pagination functionality
  const pageButtons = document.querySelectorAll('.page-btn:not(.prev):not(.next)');
  const prevButton = document.querySelector('.page-btn.prev');
  const nextButton = document.querySelector('.page-btn.next');
  
  if (pageButtons.length) {
    pageButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all pagination buttons
        pageButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // In a real implementation, you would load data for the selected page
        console.log(`Page ${this.textContent} selected`);
      });
    });
  }
  
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      const activeButton = document.querySelector('.page-btn.active');
      const prevSibling = activeButton.previousElementSibling;
      
      if (prevSibling && !prevSibling.classList.contains('prev')) {
        // Simulate click on previous page button
        prevSibling.click();
      }
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      const activeButton = document.querySelector('.page-btn.active');
      const nextSibling = activeButton.nextElementSibling;
      
      if (nextSibling && !nextSibling.classList.contains('next') && !nextSibling.classList.contains('page-ellipsis')) {
        // Simulate click on next page button
        nextSibling.click();
      }
    });
  }
  
  // Action button dropdown (three dots)
  const actionButtons = document.querySelectorAll('.action-btn');
  
  actionButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // In a real implementation, you would show a dropdown menu
      // with options like Edit, Delete, etc.
      console.log('Action button clicked for row:', this.closest('tr').querySelector('td:first-child').textContent);
      
      // Prevent event bubbling
      e.stopPropagation();
    });
  });
  
  // Make table rows clickable for details view
  const tableRows = document.querySelectorAll('.applications-table tbody tr');
  
  tableRows.forEach(row => {
    row.addEventListener('click', function() {
      const applicationId = this.querySelector('td:first-child').textContent;
      
      // In a real implementation, you would navigate to application details page
      console.log(`View details for application ${applicationId}`);
    });
  });
});