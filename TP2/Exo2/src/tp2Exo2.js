$(document).ready(function() {
  initMap();
}) ;

function initMap() {
  // On initialise la carte
  var carte = L.map('maCarte').setView([48.852969, 2.349903], 13);

  // On charge les "tuiles"
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      // Il est toujours bien de laisser le lien vers la source des données
      attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
      minZoom: 1,
      maxZoom: 20
  }).addTo(carte);

  let triangle = L.polygon([
      [29.1222349, -80.991361],
      [18.216919, -66.580912],
      [32.320236, -64.7740215],
  ], {
      color: 'red',
      fillColor: 'red',
      fillOpacity: 0.5
  }).addTo(carte);
}
