let map = L.map('map').setView([47.7231, 86.9407], 13);
        L.tileLayer('https://tile.openstreetmap.org/13/47.776/86.9407.png', {
            maxZoom: 1,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        L.control.zoom({
            position: 'topright' // Adjust position if needed
        }).addTo(map);
// Set map bounds to restrict panning
var bounds = [
    [46.5, -92.0], // Southwest corner
    [49.5, -84.0]  // Northeast corner
];
map.setMaxBounds(bounds);

// Function to handle each feature
function onEachFeature(feature, layer) {
    if (feature.properties) {
        // Create the popup content
        var content = `
            <div>
                <img style="width: 200px;" src="${feature.properties.image}" alt="Ship Image">
                <h4>${feature.properties.title}</h4>
                <p><strong>Year:</strong> ${feature.properties.time}</p>
                <p>${feature.properties.description}</p>
            </div>`;
        
        // Bind the popup with autoPan enabled
        layer.bindPopup(content, { 
            closeButton: true, 
            autoPan: true, 
            autoPanPadding: [50, 50] 
        });
    }
}

// Add GeoJSON data to the map
L.geoJSON(dataset1, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        // Use a custom icon for each feature
        return L.marker(latlng, { icon: L.icon(feature.properties.icon) });
    }
}).addTo(map);
