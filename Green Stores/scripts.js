$(document).ready(function(){
  $('#load').on('mouseenter', function () {
    $(this).css("background", "yellowgreen");
  });
  $('#load').on('mouseleave', function () {
    $(this).css("background", "green");
  });
});
