// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código JS.
document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. SMOOTH SCROLLING (Desplazamiento Suave al hacer clic en el menú)
    // ----------------------------------------------------------------------
    
    // Selecciona todos los enlaces de la barra de navegación que apuntan a un ID (#)
    const navLinks = document.querySelectorAll('.sticky-nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el comportamiento predeterminado del navegador (salto brusco)
            e.preventDefault();
            
            // Obtiene el ID del destino (ej: '#diseno')
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Usa el método scrollIntoView para un desplazamiento suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ----------------------------------------------------------------------
    // 2. EJEMPLO DE LÓGICA DE INTERACTIVIDAD (Acordeón o Toggle)
    //    Puedes usar esta lógica en las tarjetas de Mantenimiento o puntos clave.
    // ----------------------------------------------------------------------

    // EJEMPLO: Añadir un botón que revele más detalles en la sección de Requerimientos
    const requerimientosSection = document.getElementById('requerimientos');

    if (requerimientosSection) {
        // Crea el botón dinámicamente
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Ver Puntos Clave Adicionales';
        toggleButton.className = 'toggle-button'; // Clase CSS para estilizarlo
        
        // Crea el contenido oculto
        const hiddenContent = document.createElement('div');
        hiddenContent.innerHTML = '<h4>Documentación Clave:</h4><p>Especificación de Requerimientos de Software (ERS), Matriz de Trazabilidad.</p>';
        hiddenContent.style.display = 'none'; // Inicialmente oculto
        hiddenContent.className = 'hidden-details';

        // Inserta los elementos en la sección
        requerimientosSection.appendChild(toggleButton);
        requerimientosSection.appendChild(hiddenContent);

        // Añade el evento de clic al botón
        toggleButton.addEventListener('click', () => {
            if (hiddenContent.style.display === 'none') {
                hiddenContent.style.display = 'block';
                toggleButton.textContent = 'Ocultar Detalles';
            } else {
                hiddenContent.style.display = 'none';
                toggleButton.textContent = 'Ver Puntos Clave Adicionales';
            }
        });
    }

});