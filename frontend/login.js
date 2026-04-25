document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('passwordField');
    const eyeIcon = document.querySelector('.eye-icon');
    const loginForm = document.getElementById('loginForm');

    // Toggle password visibility
    eyeIcon.addEventListener('click', () => {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
    });

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Attempting to connect to Guardian Interface...');
    });
});