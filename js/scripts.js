$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).children().toggle(); //simplify solution
  });

  // $(".clickable1").click(function() {    original solution
  //   $(".clickable1 .question").toggle();
  //   $(".clickable1 .answer").toggle();
  // });
  
  // $(".clickable2").click(function() {
  //   $(".clickable2 .question").toggle();
  //   $(".clickable2 .answer").toggle();
  // });
});
