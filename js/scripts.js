
$(document).ready(function() {

  // function clickElement(a) {
  //   if (a === "H1") {
  //     alert("This is a header.");
  //     alert("I told you, THIS IS A HEADER!");
  //   } else if (a === "P") {
  //     alert("This is a paragraph.");
  //   } else if (a === "IMG") {
  //     alert("This is an image.");
  //   }
  // }

  function clickElement(a) {
    if (a === "h1") {
      alert("This is a header.");
      alert("I told you, THIS IS A HEADER!");
    } else if (a === "p") {
      alert("This is a paragraph.");
    } else if (a === "img") {
      alert("This is an image.");
    }
  }

//User Interface
  // $("p, h1, img").click(function() {
  //   var items = ["H1", "P", "IMG"];
  //   var element = $(this).prop("tagName");
  //   // element = text(this.tagName);
  //   if (items.includes(element)) {
  //     clickElement(element);
  //   }

  // })
  
  //Alternate Method
  var tagArray = ["h1", "p", "img"];
  tagArray.forEach(function(tag) {
    $(tag).click(function() {
      clickElement(tag);
    })
  })

})
