
$(document).ready(function() {
  $("h1").click(function () {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
  });

  $(".clickable").click(function() {
    $(".initially-showing").slideToggle();
    $(".initially-hidden").slideToggle();
  });


})
