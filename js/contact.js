$(document).ready(function(){
    $('input').focusin(function(){
    // Cuando el campo de texto obtiene el foco
    $(this).css({borderColor: '#ff0000', backgroundColor: '#ffffcc'});
    }).focusout(function(){
    // Cuando el campo de texto pierde el foco
    $(this).css({borderColor: '', backgroundColor: ''});
    });
   });
   