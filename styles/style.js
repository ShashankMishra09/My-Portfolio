var typed = new Typed('#element', {
    strings: ['HTML', 'CSS','JavaScript','React','NodeJs','ExpressJs','MongoDb'],
    typeSpeed: 100,
  });

  $(document).ready(function() {
    // Add click event handler to images with the class "pic1" to "pic7"
    $(".blog img").on("click", function() {
      // Remove the "transform" class from all images first
      $(".blog img").removeClass("transform");
      
      // Add the "transform" class to the clicked image
      $(this).addClass("transform"); 
      $(this).addClass("index");    
   

      setTimeout(() => {
        $(this).removeClass("transform");
      }, 5000);

    });
  });
  