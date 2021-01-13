$(document).ready(function() {
    //Récupérer position
    let posAc, acc;
    navigator.geolocation.getCurrentPosition(function(pos) {
        let crd = pos.coords;
        posAc = [crd.latitude, crd.longitude];
        acc = crd.accuracy;

        //centre map sur nice
        var lat = 24.886;
        var lon = -70.268;
        let carte = null;

        carte = L.map('maCarte').setView([lat, lon], 2);

        L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
            attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
           subdomains: 'abcd',
           minZoom: 0,
           maxZoom: 20,
           ext: 'png'
        }).addTo(carte);
        
        const trico = [
            { lat: 29.122349, lng: -80.991361 },
            { lat: 18.216919, lng: -66.580912 },
            { lat: 32.320236, lng: -64.7740215 },
        ];

        var poly = L.polygon(trico).addTo(carte);

        var circle = L.circle(posAc, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: acc
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

        let latLngAc = L.latLng(crd.latitude, crd.longitude);
        let distanceuh = latLngAc.distanceTo(L.latLng(43.2969500, 5.3810700));
        $("#distance").text(distanceuh);
    });
});
