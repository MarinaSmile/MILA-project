$(document).ready(function(){
  $('.btn').on('mouseenter', function () {
    $(this).css("background", "yellowgreen");
  });
  $('.btn').on('mouseleave', function () {
    $(this).css("background", "green");
  });
});
