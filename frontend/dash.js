// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize map (Coordinates set to a city center)
//     //     const map = L.map('map', {
//         zoomControl: false // Hide default zoom buttons to match UI
//     }).setView([40.7128, -74.0060], 13); 

//     // Add Dark Mode tiles from Stadia Maps or CartoDB
//     L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//         attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
//     }).addTo(map);

//     // Add a custom circle to represent the 'Safe Zone' highlight in your image
//     L.circle([40.7128, -74.0060], {
//         color: '#22c55e',
//         fillColor: '#22c55e',
//         fillOpacity: 0.1,
//         radius: 1000
//     }).addTo(map);

//     // Optional: Add a marker for current location
//     const customIcon = L.divIcon({
//         className: 'custom-div-icon',
//         html: "<div style='background-color:#2563eb; height:12px; width:12px; border-radius:50%; border:2px solid white;'></div>",
//         iconSize: [12, 12],
//         iconAnchor: [6, 6]
//     });
    
//     L.marker([40.7128, -74.0060], {icon: customIcon}).addTo(map);
// ;

async function startApp() {
     try {
        // 1. Fetch API Key from your Node.js Backend
        const response = await fetch('http://localhost:3000/api/config');
        const data = await response.json();
        
        // 2. Load Google Maps
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${data.apiKey}&callback=initMap`;
        script.async = true;
        document.head.appendChild(script);
    } catch (err) {
        console.error("Could not connect to backend!", err);
    }
}

// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 28.6139, lng: 77.2090 },
//         zoom: 13,
//         styles: [{ "elementType": "geometry", "stylers": [{ "color": "#212121" }] }] // Dark mode
//     });
// }
function initMap() {
  const location = { lat: 23.2599, lng: 77.4126 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: location
  });
}

startApp();