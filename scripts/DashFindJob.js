
document.addEventListener('DOMContentLoaded', function() {
  // Toggle filter sections
  const filterHeaders = document.querySelectorAll('.filter-header');
  filterHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const filterOptions = header.nextElementSibling;
      const icon = header.querySelector('i');
      
      // Toggle display of filter options
      filterOptions.style.display = filterOptions.style.display === 'none' ? 'flex' : 'none';
      
      // Toggle the icon
      if (filterOptions.style.display === 'none') {
        icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
      } else {
        icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
      }
    });
    
    // Set initial state - closed by default
    const filterOptions = header.nextElementSibling;
    filterOptions.style.display = 'none';
    const icon = header.querySelector('i');
    icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
  });

  // Toggle view mode (grid/list)
  const gridViewBtn = document.querySelector('.grid-view');
  const listViewBtn = document.querySelector('.list-view');
  const jobCards = document.querySelector('.job-cards');
  
  gridViewBtn.addEventListener('click', () => {
    jobCards.classList.add('grid-view');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
  });
  
  listViewBtn.addEventListener('click', () => {
    jobCards.classList.remove('grid-view');
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
  });

  // Checkbox functionality for filter options
  const filterOptions = document.querySelectorAll('.filter-option input');
  filterOptions.forEach(option => {
    option.addEventListener('change', () => {
      // In a real application, you would filter jobs based on the selected options
      console.log('Filter changed:', option.parentElement.textContent.trim());
    });
  });

  // Pagination functionality
  const paginationBtns = document.querySelectorAll('.pagination-btn');
  paginationBtns.forEach(btn => {
    if (!btn.classList.contains('prev') && !btn.classList.contains('next')) {
      btn.addEventListener('click', () => {
        paginationBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // In a real application, you would load the corresponding page of jobs
        console.log('Page changed to:', btn.textContent);
      });
    }
  });

  // Previous page button
  const prevBtn = document.querySelector('.pagination-btn.prev');
  prevBtn.addEventListener('click', () => {
    const activePage = document.querySelector('.pagination-btn.active');
    if (activePage && activePage.previousElementSibling && !activePage.previousElementSibling.classList.contains('prev')) {
      activePage.previousElementSibling.click();
    }
  });

  // Next page button
  const nextBtn = document.querySelector('.pagination-btn.next');
  nextBtn.addEventListener('click', () => {
    const activePage = document.querySelector('.pagination-btn.active');
    if (activePage && activePage.nextElementSibling && !activePage.nextElementSibling.classList.contains('next') && !activePage.nextElementSibling.classList.contains('pagination-dots')) {
      activePage.nextElementSibling.click();
    }
  });

  // Apply button functionality
  const applyBtns = document.querySelectorAll('.apply-btn');
  applyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // In a real application, you would open an application form
      alert('Application form would open here');
    });
  });

  // Sort dropdown functionality
  const sortSelector = document.querySelector('.sort-selector');
  sortSelector.addEventListener('click', () => {
    // In a real application, you would show a dropdown with sorting options
    alert('Sort options would appear here');
  });

  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', () => {
    const jobTitle = document.querySelector('.search-input-group input').value;
    const location = document.querySelector('.location-input-group input').value;
    
    // In a real application, you would perform a search with these values
    console.log('Searching for:', jobTitle, 'in', location);
  });
});