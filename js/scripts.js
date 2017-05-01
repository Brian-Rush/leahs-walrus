 $(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  var backgrounds = ["raccoon", "giraffe", "squirrel"];
  backgrounds.forEach(function(background) {
    var buttonClick = $("button#" + background).click(function() {
      $("body").removeClass();
      $("body").addClass(background);
    });
  });

 // $("button#raccoon").click(function() {
 //   $("body").removeClass();
 //   $("body").addClass("raccoon-background");
 // });
 //
 // $("button#giraffe").click(function() {
 //   $("body").removeClass();
 //   $("body").addClass("giraffe-background");
 // });
 //
 // $("button#squirrel").click(function() {
 //   $("body").removeClass();
 //   $("body").addClass("squirrel-background");
 // });



});
