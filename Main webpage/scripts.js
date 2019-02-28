$(document).ready(function(){
  $('.btn-secondary').on('mouseenter', function () {
    $(this).css("background", "yellowgreen");
  });
  $('.btn-secondary').on('mouseleave', function () {
    $(this).css("background", "green");
  });
});
