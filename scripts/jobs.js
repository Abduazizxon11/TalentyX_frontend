document.addEventListener('DOMContentLoaded', function() {
    // Filter sections toggle
    const filterHeaders = document.querySelectorAll('.filter-header');
    
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const filterOptions = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle visibility of filter options
            if (filterOptions.style.display === 'none') {
                filterOptions.style.display = 'flex';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                filterOptions.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // View toggle (list/grid)
    const listViewBtn = document.querySelector('.list-view');
    const gridViewBtn = document.querySelector('.grid-view');
    const jobCards = document.querySelector('.job-cards');
    
    listViewBtn.addEventListener('click', function() {
        jobCards.classList.remove('grid-view-active');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });
    
    gridViewBtn.addEventListener('click', function() {
        jobCards.classList.add('grid-view-active');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        
        // Add CSS for grid view
        if (!document.getElementById('grid-view-styles')) {
            const style = document.createElement('style');
            style.id = 'grid-view-styles';
            style.textContent = `
                .job-cards.grid-view-active {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 1rem;
                }
                
                .grid-view-active .job-card {
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .grid-view-active .job-info {
                    width: 100%;
                    margin-bottom: 1rem;
                }
                
                .grid-view-active .job-apply {
                    width: 100%;
                    text-align: center;
                }
            `;
            document.head.appendChild(style);
        }
    });
    
    // Pagination
    const paginationButtons = document.querySelectorAll('.pagination .page');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', function() {
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Simulate page change (in a real application, this would fetch new data)
            window.scrollTo({
                top: document.querySelector('.job-listings').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
    
    // Previous and Next buttons
    const prevButton = document.querySelector('.prev-page');
    const nextButton = document.querySelector('.next-page');
    
    prevButton.addEventListener('click', function() {
        const activePage = document.querySelector('.pagination .page.active');
        const prevPage = activePage.previousElementSibling;
        
        if (prevPage && prevPage.classList.contains('page')) {
            activePage.classList.remove('active');
            prevPage.classList.add('active');
            
            // Simulate page change
            window.scrollTo({
                top: document.querySelector('.job-listings').offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
    
    nextButton.addEventListener('click', function() {
        const activePage = document.querySelector('.pagination .page.active');
        const nextPage = activePage.nextElementSibling;
        
        if (nextPage && nextPage.classList.contains('page')) {
            activePage.classList.remove('active');
            nextPage.classList.add('active');
            
            // Simulate page change
            window.scrollTo({
                top: document.querySelector('.job-listings').offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
    
    // Search functionality
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input input');
    const locationInput = document.querySelector('.location-input input');
    const searchButton = document.querySelector('.search-btn');
    
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.trim().toLowerCase();
        const locationTerm = locationInput.value.trim().toLowerCase();
        
        // In a real application, this would fetch filtered results from a server
        // For demo purposes, we'll just filter the existing job cards
        filterJobs(searchTerm, locationTerm);
    });
    
    function filterJobs(searchTerm, locationTerm) {
        const jobCards = document.querySelectorAll('.job-card');
        let matchCount = 0;
        
        jobCards.forEach(card => {
            const jobTitle = card.querySelector('h3').textContent.toLowerCase();
            const jobLocation = card.querySelector('.company-location').textContent.toLowerCase();
            
            const titleMatch = searchTerm === '' || jobTitle.includes(searchTerm);
            const locationMatch = locationTerm === '' || jobLocation.includes(locationTerm);
            
            if (titleMatch && locationMatch) {
                card.style.display = 'flex';
                matchCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update job count
        document.querySelector('.job-count').textContent = `Showing ${matchCount} Jobs`;
        
        // Scroll to results
        window.scrollTo({
            top: document.querySelector('.job-listings').offsetTop - 100,
            behavior: 'smooth'
        });
    }
    
    // Apply button functionality
    const applyButtons = document.querySelectorAll('.apply-btn');
    
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const jobTitle = this.closest('.job-card').querySelector('h3').textContent;
            const company = this.closest('.job-card').querySelector('.company-location span').textContent;
            
            alert(`Application submitted for ${jobTitle} at ${company}!`);
            
            // In a real application, this would open an application form or redirect to an application page
        });
    });
    
    // Filter checkboxes functionality
    const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // In a real application, this would filter results based on selected filters
            // For demo purposes, we'll just log the selected filters
            const selectedFilters = Array.from(filterCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.closest('.checkbox-container').textContent.trim());
            
            console.log('Selected filters:', selectedFilters);
            
            // Simulate filter change
            const jobCards = document.querySelectorAll('.job-card');
            jobCards.forEach(card => {
                if (Math.random() > 0.3) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Update job count
            const visibleJobs = document.querySelectorAll('.job-card[style="display: flex;"]').length;
            document.querySelector('.job-count').textContent = `Showing ${visibleJobs} Jobs`;
        });
    });
    
    // Sort dropdown functionality
    const sortDropdown = document.querySelector('.sort-dropdown');
    
    sortDropdown.addEventListener('click', function() {
        // In a real application, this would open a dropdown menu with sorting options
        const sortOptions = ['Most relevant', 'Newest', 'Highest salary', 'Lowest salary'];
        let currentOption = this.querySelector('span').textContent;
        
        // Get next option
        const nextOptionIndex = (sortOptions.indexOf(currentOption) + 1) % sortOptions.length;
        const nextOption = sortOptions[nextOptionIndex];
        
        // Update dropdown text
        this.querySelector('span').textContent = nextOption;
        
        // Simulate sorting change
        const jobCards = document.querySelectorAll('.job-card');
        const jobCardsArray = Array.from(jobCards);
        
        // Shuffle job cards for demo
        jobCardsArray.sort(() => Math.random() - 0.5);
        
        const jobCardsContainer = document.querySelector('.job-cards');
        jobCardsArray.forEach(card => {
            jobCardsContainer.appendChild(card);
        });
    });
    
    // Mobile navigation toggle
    const navLeft = document.querySelector('.nav-left');
    const navRight = document.querySelector('.nav-right');
    
    if (window.innerWidth <= 576) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        navLeft.insertBefore(mobileMenuBtn, navLeft.querySelector('.nav-links'));
        
        mobileMenuBtn.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Add mobile menu styles
        const style = document.createElement('style');
        style.textContent = `
            .mobile-menu-btn {
                display: block;
                font-size: 1.5rem;
                color: var(--text-color);
            }
            
            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: var(--white);
                padding: 1rem;
                box-shadow: var(--shadow);
                z-index: 100;
            }
            
            .nav-links a {
                margin: 0.5rem 0;
            }
        `;
        document.head.appendChild(style);
    }
});