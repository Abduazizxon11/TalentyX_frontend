document.addEventListener('DOMContentLoaded', function() {
    const jobSeekerTab = document.querySelector('.tab:nth-child(1)');
    const companyTab = document.querySelector('.tab:nth-child(2)');

    jobSeekerTab.addEventListener('click', function() {
        jobSeekerTab.classList.add('tab-active');
        jobSeekerTab.classList.remove('tab-inactive');
        companyTab.classList.add('tab-inactive');
        companyTab.classList.remove('tab-active');
    });

    companyTab.addEventListener('click', function() {
        companyTab.classList.add('tab-active');
        companyTab.classList.remove('tab-inactive');
        jobSeekerTab.classList.add('tab-inactive');
        jobSeekerTab.classList.remove('tab-active');
    });

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('password-error');
    const submitButton = document.querySelector('.submit-button');

    function validatePasswords() {
        if (confirmPassword.value !== password.value) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Password does not match. Please check your password.';
            return false;
        } else {
            errorMessage.style.display = 'none';
            errorMessage.textContent = '';
            return true;
        }
    }

    confirmPassword.addEventListener('input', validatePasswords);
    
    submitButton.addEventListener('click', function(e) {
        if (!validatePasswords()) {
            e.preventDefault();
        } else {
            // Proceed with account creation
            console.log('Passwords match, creating account...');
        }
    });
});