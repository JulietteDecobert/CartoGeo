$(document).ready(function() {

    var img = document.getElementById('needleSvg');
    if(window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(orientation) {
        img.style.transform = 'rotate(' + orientation.alpha + 'deg)' ;
      }) ;
    }
  
  }) ;