let exercice3 ;

$(document).ready(function() {
  exercice3 = $('#exercice3') ;

  window.addEventListener('touchstart', touchEventHandler) ;
    window.addEventListener('touchend', touchEventHandler) ;
    window.addEventListener('touchcancel', touchEventHandler) ;
    window.addEventListener('touchleave', touchEventHandler) ;
    window.addEventListener('touchmove', touchEventHandler) ;

  }) ;

  function touchEventHandler(event) {
    var functionEx3 = exercice3.find('div') ;
    functionEx3.find('ul').empty() ;
    functionEx3.find('ul').append(
      "<li>Position X : " + event.changedTouches[0].screenX + "</li>",
      "<li>Position Y : " + event.changedTouches[0].screenY + "</li>",
      "<li>Type event : " + event.type + "</li>"
    ) ;
}
