$(document).ready(function() {

    var canvasCompass = document.getElementById('canvasCompass') ;
    var ctx = canvasCompass.getContext('2d');
    var compass = new Image();
    var needle = new Image() ;
    compass.src = './image/compass.png' ;
    needle.src = './image/needle.png' ;
  
    if(window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(orientation) {
        console.log(orientation) ;
        ctx.clearRect(0, 0, canvasCompass.width, canvasCompass.height);
        ctx.drawImage(compass, 0, 0);
        ctx.save();
        ctx.translate(100, 100);
        ctx.rotate(orientation.alpha * (Math.PI / 180));
        ctx.drawImage(needle, -100, -100);
        ctx.restore();
      }) ;
    }
  
  }) ;