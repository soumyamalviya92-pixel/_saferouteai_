const express = require('express');
const app = express();

const path = require('path');
const PORT = 3000;

// Tell Node to serve images, CSS, and JS from the "public" folder
app.use(express.static('public'));

// Mock Database Data (What shows up on the dashboard)
const userData = {
    name: "Adrian Thorne",
    trustLevel: 98,
    journeys: 124,
    history: [
        { route: "Sunset District → Market St", time: "Yesterday, 6:42 PM", tag: "OPTIMAL" },
        { route: "SFO Airport → Mission District", time: "Oct 12, 11:15 PM", tag: "MANUAL" }
    ]
};




// Route to get data for your profile.js to fetch
app.get('/api/user', (req, res) => {
    res.json(userData);
});

// Route to load the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'profile.ejs'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});



// IMPORTANT: Add this so Node can read data from your form
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// This is our "temporary" database
let userData = {
    name: "Adrian Thorne",
    location: "San Francisco, CA",
    trustLevel: 98
};

// Route to get the data
app.get('/api/user', (req, res) => {
    res.json(userData);
});

// NEW: Route to handle the Edit Profile form submission
app.post('/update-profile', (req, res) => {
    // Get data from the form
    const { userName, userLocation } = req.body;
    
    // Update our "database"
    userData.name = userName;
    userData.location = userLocation;
    
    // Redirect back to the profile page to see changes
    res.redirect('/profile.html');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});


async function loadDashboard() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        
        // Update the HTML elements with data from server
        document.querySelector('h1').innerText = data.name;
        // Target the <p> tag under the H1 for location
        document.querySelector('.user-details p').innerText = `${data.location} • Member since 2023`;
        
    } catch (error) {
        console.error("Error loading profile:", error);
    }
}

window.onload = loadDashboard;


// 1. THIS IS CRITICAL: This allows the server to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let userData = {
    name: "Adrian Thorne",
    location: "San Francisco, CA"
};

// 2. Route to send data to the frontend
app.get('/api/user', (req, res) => {
    res.json(userData);
});

// 3. Route to receive data from the edit form
app.post('/update-profile', (req, res) => {
    // console.log(req.body); // Debugging: see if data arrives in terminal
    
    userData.name = req.body.userName;
    userData.location = req.body.userLocation;

    // 4. Redirect back to your main file name
    // If your main file is profile.ejs, use that name here:
    res.redirect('/profile.ejs'); 
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));