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
      [48.85779, 2.3392724],
      [48.852630, 2.3523187],
      [48.86, 2.35223293],
  ], {
      color: 'green',
      fillColor: 'green',
      fillOpacity: 0.5
  }).addTo(carte);
}
