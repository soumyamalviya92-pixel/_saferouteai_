const express = require('express');
const app = express();

const path = require('path');
const PORT = 3000;
const cors = require('cors');
require('dotenv').config();
//const path = require('path');
// // This forces Node to look for the .env file in the exact folder where index.js lives
// require('dotenv').config({ path: path.join(__dirname, '.env') }); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


console.log("Checking for key...");
console.log("Key found:", process.env.GOOGLE_MAPS_API_KEY); // This will print in your terminal
app.use(cors()); // This allows your separate Frontend folder to talk to this folder

app.get('/api/config', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

// Import the new route you just created
const safeRoute = require('./safeRoute');

// Link the frontend folder so the browser can find your CSS/JS
app.use(express.static(path.join(__dirname, '../saferouteai')));

// Use the routes
app.use('/', safeRoute); 

// Your existing code for the "other page" stays here
// app.get('/other-page', (req, res) => { ... });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
