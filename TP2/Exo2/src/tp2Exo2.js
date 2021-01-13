$(document).ready(function() {
  initMap();
}) ;

function initMap() {
  // On initialise la carte
  var carte = L.map('maCarte').setView([29.1222349,-80.991361], 1);

  // L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  //     // Il est toujours bien de laisser le lien vers la source des données
  //     attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
  //     minZoom: 1,
  //     maxZoom: 20
  // }).addTo(carte);

  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
  }).addTo(zeMap);


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
