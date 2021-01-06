window.addEventListener('touchstart', touchEventHandler) ;
  window.addEventListener('touchend', touchEventHandler) ;
  window.addEventListener('touchcancel', touchEventHandler) ;
  window.addEventListener('touchleave', touchEventHandler) ;
  window.addEventListener('touchmove', touchEventHandler) ;

}) ;

function touchEventHandler(event) {
  var firstDiv = exercice3.find('div') ;
  firstDiv.find('ul').empty() ;
  firstDiv.find('ul').append(
    "<li>Position X : " + event.changedTouches[0].screenX + "</li>",
    "<li>Position Y : " + event.changedTouches[0].screenY + "</li>",
    "<li>Type event : " + event.type + "</li>"
  ) ;
