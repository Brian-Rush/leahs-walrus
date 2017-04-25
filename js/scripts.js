 $(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

 $("button#raccoon").click(function() {
   $("body").removeClass();
   $("body").addClass("raccoon-background");
 });

 $("button#giraffe").click(function() {
   $("body").removeClass();
   $("body").addClass("giraffe-background");
 });

 $("button#squirrel").click(function() {
   $("body").removeClass();
   $("body").addClass("squirrel-background");
 });



});
