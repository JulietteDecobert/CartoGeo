$(document).ready(function() {
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(orientation) {
      console.log(orientation);
      $('#function1').find('ul').empty();
      $('#function1').find('ul').append(
        '<li>alpha : ' + event.alpha + '</li>',
        "<li>beta : " + event.beta + "</li>",
        "<li>gamma : " + event.gamma + "</li>"
      ) ;
    });
  }

  if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', function(event) {
        console.log(event);
        let rx,ry,rz;
        let ax,ay,az;
        rx = event.acceleration.x;
        ry = event.acceleration.y;
        rz = event.acceleration.z;

        ax = event.rotationRate.alpha;
        ay = event.rotationRate.beta;
        az = event.rotationRate.gamma;
        $('#function2').find('ul').empty();
        $('#function2').find('ul').append(
          '<li>rotation: ' + ("[" + rx + "," +ry +"," +rz + "]" +'</li>'),
          '<li>acceleration:' + ("[" + ax + "," +ay +"," +az + "]" + '</li>')
        );
      });
    }
}) ;
