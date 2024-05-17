document.addEventListener('DOMContentLoaded', function () {
    // Create map inside the container
    let map = L.map('map-container').setView([58.373523, 26.716045], 12);

    // Add OpenStreetMap tile layer
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'OpenStreetMap contributors'
    });
    osm.addTo(map);
});

async function addDistrictsGeoJson(url) { const response = await fetch(url)
const data = await response.json() const polygons = L.geoJson(data) polygons.addTo(map)
}
addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')
