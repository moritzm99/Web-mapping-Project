let map = L.map('map').setView([58.373523, 26.716045], 12)
const osm = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}', {
maxZoom: 19,
attribution: 'OpenStreetMap contributors', })
osm.addTo(map)


