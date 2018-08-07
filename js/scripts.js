
$(document).ready(function() {
  $("h1").click(function () {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });

  $(".clickable").click(function() {
    $(".initially-hidden").fadeOut();
    $(".initially-showing").fadeIn();
  });

  $(".clickable2").click(function() {
    $(".initially-hidden").fadeIn();
    $(".initially-showing").fadeOut();
  });

})
