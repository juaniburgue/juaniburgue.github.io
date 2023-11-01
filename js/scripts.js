document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los enlaces del menú y las secciones correspondientes
    var enlacesMenu = document.querySelectorAll('nav ul li a');
    var secciones = document.querySelectorAll('section');

    // Oculta todas las secciones excepto la de inicio al cargar la página
    secciones.forEach(function(seccion) {
        if (seccion.id !== 'inicio') {
            seccion.style.display = 'none';
        }
    });

    // Función para mostrar una sección y ocultar las demás
    function mostrarSeccion(id) {
        secciones.forEach(function(seccion) {
            if (seccion.id === id) {
                seccion.style.display = 'block';
            } else {
                seccion.style.display = 'none';
            }
        });
    }

    // Agrega un evento de clic a cada enlace del menú
    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace
            var destino = this.getAttribute('href').substring(1); // Obtiene el ID de la sección a mostrar
            mostrarSeccion(destino); // Muestra la sección correspondiente
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento contenedor de la barra de programación
    const barraProgramacion = document.querySelector(".barra-programacion");

    // Define tu lista de programación (puedes obtenerla de tu lista anterior)
    const programacion = [
        // ... Tu lista de programas con propiedades de hora y programa ...
    ];

    // Función para actualizar la barra de programación según la hora actual
    function actualizarProgramacion() {
        const horaActual = new Date().getHours();

        // Encuentra el programa actual basado en la hora actual
        const programaActual = programacion.find(programa => {
            const horaInicio = parseInt(programa.hora.split(":")[0]); // Obtiene la hora de inicio del programa
            const horaFin = (horaInicio + 2) % 24; // Supongamos que cada programa dura 2 horas

            // Verifica si la hora actual está dentro del rango del programa
            return horaActual >= horaInicio && horaActual < horaFin;
        });

        // Actualiza la barra de programación con el programa actual
        barraProgramacion.textContent = programaActual ? programaActual.programa : "Programa en Vivo";

        // Establece un temporizador para actualizar la programación cada 1 hora
        setTimeout(actualizarProgramacion, 60 * 60 * 1000);
    }

    // Llama a la función para la primera actualización
    actualizarProgramacion();
});


