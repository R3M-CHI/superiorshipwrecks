let map = L.map('map').setView([47.7231, 86.9407], 13);
        L.tileLayer('https://tile.openstreetmap.org/13/47.776/86.9407.png', {
            maxZoom: 1,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
