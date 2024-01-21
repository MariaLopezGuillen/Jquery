$(document).ready(function() {
    $('.agregar-al-carrito').click(function() {
        // Obtén la información del perro
        var nombrePerro = $(this).parent().prev('.card-title').text();
        var descripcionPerro = $(this).parent().next('.card-text').text();

        // Agrega la información del perro al carrito
        // Esto dependerá de cómo estés manejando el carrito en tu aplicación
        // Aquí hay un ejemplo básico usando un array
        var carrito = [];
        carrito.push({nombre: nombrePerro, descripcion: descripcionPerro});

        console.log(carrito);
    });
});
