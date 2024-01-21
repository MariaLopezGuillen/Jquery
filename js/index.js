$(document).ready(function () {
  $('.empresa').hover(function () {
    // Cuando el ratón entra en la imagen
    $(this).find('.normal').hide();
    $(this).find('.hover').show();
  }, function () {
    // Cuando el ratón sale de la imagen
    $(this).find('.normal').show();
    $(this).find('.hover').hide();
  });
});

$(".container").mouseover(function () { 
  
});
