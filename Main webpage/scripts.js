$(document).ready(function(){

  $('.btn-secondary').hover(function () {
    $(this).css("background", "yellowgreen");
  });

  $('.btn-secondary').on('mouseleave', function () {
    $(this).css("background", "green");
  });

});
