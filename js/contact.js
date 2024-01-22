$(document).ready(function () {
    $('input').focusin(function () {
        // Cuando el campo de texto obtiene el foco
        $(this).css({ borderColor: '#ff0000', backgroundColor: '#ffffcc' });
    }).focusout(function () {
        // Cuando el campo de texto pierde el foco
        $(this).css({ borderColor: '', backgroundColor: '' });
    });
});
//captcha
$(document).ready(function () {
    // Genera dos números aleatorios
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);

    // Muestra la suma de los dos números al usuario
    $('#captcha').text(num1 + " + " + num2);

    // Guarda la suma de los dos números para su posterior validación
    var suma = num1 + num2;

    // Valida la respuesta del usuario cuando hace clic en el botón "validar"
    $('#validar').click(function () {
        var respuestaUsuario = parseInt($('#respuestaCaptcha').val());
        if (respuestaUsuario == suma) {
            alert("¡Correcto!");
        } else {
            alert("¡Incorrecto!");
        }
    });
});
//----

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

$("#botonEnvio").click(function () {
    alert("¡Formulario enviado!");
});
