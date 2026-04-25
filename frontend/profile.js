// Simple hover effect for history items
document.querySelectorAll('.history-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#f9f9f9';
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
    });
});

// Update current time (Optional simulation)
console.log("Dashboard Loaded: Adrian Thorne's Secure Profile is Active.");


async function loadDashboard() {
    const response = await fetch('/api/user');
    const data = await response.json();
    
    // Example: Updating the name on the screen
    document.querySelector('h1').innerText = data.name;
    // You can add more selectors here to fill in the trust level, etc.
}

window.onload = loadDashboard;



// Inside profile.js
async function updateDashboard() {
    const response = await fetch('/api/user');
    const data = await response.json();

    // Update Name
    document.querySelector('h1').innerText = data.name;

    // Update Location (assuming it's in a <p> tag inside .user-details)
    const locationElement = document.querySelector('.user-details p');
    if (locationElement) {
        locationElement.innerText = `${data.location} • Member since 2023`;
    }
}

// Run this as soon as the page loads
window.onload = updateDashboard;