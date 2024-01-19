$(document).ready(function(){
  // Cambiar la imagen al pasar el ratón por encima
  $('.empresa').hover(function(){
    $('img', this).attr('src', 'img\centroadopcion1.jpg');
  }, function(){
    $('img', this).attr('src', 'img\centroadopcion1.jpg');
  });
 
  // Mostrar u ocultar el texto adicional al pasar el ratón por encima
  $('.empresa').hover(function(){
    $('p', this).show();
  }, function(){
    $('p', this).hide();
  });
 
  // Funcionalidad del acordeón
  $('.acordeon h2').click(function(){
    $(this).next().slideToggle();
  });
 });
 
   