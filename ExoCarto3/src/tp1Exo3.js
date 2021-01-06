$(document).ready(function() {

  document.addEventListener("touchstart", touche, false);
  document.addEventListener("touchend", touche, false);
  document.addEventListener("touchcancel", touche, false);
  document.addEventListener("touchleave", touche, false);
  document.addEventListener("touchmove", touche, false);

  function touche(event) {
    console.log(event);
      $('#function1').find('ul').empty();
      $('#function1').find('ul').append(
        '<li>x : ' + event.changedTouches[0].pageX + '</li>',
        "<li>y : " + event.changedTouches[0].pageY + "</li>",
        "<li>type : " + event.type + "</li>"
      ) ;
  }
}
