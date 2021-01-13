// Utilisation de GeoJson
    // Exercice 3
    $.ajax({
      type: "GET",
      url: "./Geojson/ev-equipement-opendata-2020.geojson",
      success: function(data) {
        var mapJardin = L.map('maCarte').setView([43.7013, 7.2681], 10);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors',
          maxZoom: 15
        }).addTo(mapJardin);
        L.geoJSON(JSON.parse(data), {
          color: 'pink'
        }).addTo(mapJardin);
      }
    }) ;
