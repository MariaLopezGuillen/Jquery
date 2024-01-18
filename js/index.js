$(document).ready(function() {
    $('#filtroForm').on('submit', function(e) {
      e.preventDefault();
   
      // Obtén los datos del formulario
      var data = $(this).serialize();
   
      // Realiza la petición AJAX
      $.ajax({
        type: 'POST',
        url: '/ruta/a/tu/servicio',
        data: data,
        success: function(response) {
          // Actualiza los resultados de la búsqueda
          $('#resultadosBusqueda').html(response);
        },
        error: function() {
          alert('Hubo un error al intentar filtrar los resultados.');
        }
      });
    });
   });
   