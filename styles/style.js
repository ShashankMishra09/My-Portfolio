var typed = new Typed('#element', {
  strings: ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJs', 'ExpressJs', 'MongoDb'],
  typeSpeed: 100,
});

$(document).ready(function () {
  // Add click event handler to images with the class "pic1" to "pic7"
  $(".blog img").on("click", function () {
    

    // Toggle the "transform" class to the clicked image
    $(this).toggleClass("transform");

  });
  $(".mid img").on("click", function () {
    $(this).toggleClass("transfrm");
    $(".mid p").text("")
    setTimeout(() => {
      $(".mid p").text("Shashank")
    }, 5000);
  });
});

