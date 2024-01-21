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

$(document).ready(function(){
  $(".card.oreo").hover(function() {
      $(this).animate({
          marginLeft: '20px',
          opacity: 0.8
      }, 1000);
  }, function() {
      $(this).animate({
          marginLeft: '0px',
          opacity: 1
      }, 1000);
  });
});
