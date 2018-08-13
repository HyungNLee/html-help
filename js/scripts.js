
$(document).ready(function() {

  function clickElement(a) {
    if (a === "H1") {
      alert("This is a header.");
      alert("I told you, THIS IS A HEADER!");
    } else if (a === "P") {
      alert("This is a paragraph.");
    } else if (a === "IMG") {
      alert("This is an image.");
    }
  }
// alert("start")
// var parts =["h1","p","img"];
// var a=parts.forEach(function(part) {
//   $(a).click(function(){
//     alert("this is "+a)
//   }
// })
//
// alert("start2")

  // function h1Click() {
  //   alert("This is a header.");
  //   alert("I told you, THIS IS A HEADER!");
  // }
  //
  // function pClick() {
  //   alert("This is a paragraph.");
  // }
  //
  // function imgClick() {
  //   alert("This is an image.");
  // }

  // $("h1").click(function () {
  //   alert("This is a header.");
  //   alert("I told you, THIS IS A HEADER!");
  // });
  //
  // $("p").click(function() {
  //   alert("This is a paragraph.");
  // });
  //
  // $("img").click(function() {
  //   alert("This is an image.");
  // });


  $("p, h1, img").click(function() {
    var items = ["H1", "P", "IMG"];
    var element = $(this).prop("tagName");
    // element = text(this.tagName);
    if (items.includes(element)) {
      clickElement(element);
    }

    // items.forEach(function(item) {
    //   if (element === item) {
    //     clickElement(element);
    //   }
    // })
    // var element = $(this).attr("element");



    // items.forEach(function(item) {
    //   if (items.includes(element)) {
    //     alert(element);
    //   }
    // })
    // alert("1");

  })


})
