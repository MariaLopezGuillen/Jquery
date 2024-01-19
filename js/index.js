$(document).ready(function(){
  // Cambiar la imagen al pasar el ratón por encima
  $('.empresa').hover(function(){
   $(this).find('img').attr('src', 'img/gato.jpeg');
  }, function(){
   $(this).find('img').attr('src', 'img/hocico.jpeg');
  });
  
  // Mostrar u ocultar el texto adicional al pasar el ratón por encima
  $('.empresa').hover(function(){
   $(this).find('p').show();
  }, function(){
   $(this).find('p').hide();
  });
  
  // Funcionalidad del acordeón
  $('.acordeon h2').click(function(){
   $(this).next().slideToggle();
  });
 });
 