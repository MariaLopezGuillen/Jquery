$(document).ready(function(){
    $('input').focusin(function(){
    // Cuando el campo de texto obtiene el foco
    $(this).css({borderColor: '#ff0000', backgroundColor: '#ffffcc'});
    }).focusout(function(){
    // Cuando el campo de texto pierde el foco
    $(this).css({borderColor: '', backgroundColor: ''});
    });
   });
   
   $(document).ready(function(){
    $('.empresa').hover(function(){
     // Cuando el ratón entra en la imagen
     $(this).find('.normal').hide();
     $(this).find('.hover').show();
    }, function(){
     // Cuando el ratón sale de la imagen
     $(this).find('.normal').show();
     $(this).find('.hover').hide();
    });
   });

   $("#botonEnvio").click(function() {
    alert("¡Formulario enviado!");
});
