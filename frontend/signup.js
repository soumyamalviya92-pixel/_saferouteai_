document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation feedback
    const email = this.querySelector('input[type="email"]').value;
    const pass = this.querySelectorAll('input[type="password"]')[0].value;
    const confirmPass = this.querySelectorAll('input[type="password"]')[1].value;

    if(pass !== confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    console.log("Account creation initiated for:", email);
    alert("Welcome to the Sanctuary! Account created successfully.");
});