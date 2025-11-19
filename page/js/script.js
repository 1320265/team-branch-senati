// Obtener referencias a los elementos del DOM una vez que la página ha cargado
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const loginContainer = document.getElementById('loginContainer');
    const mensajeDinamico = document.getElementById('mensajeDinamico');
    const loginButton = document.querySelector('.login-btn');

    // Asegurarse de que el botón tiene el evento, incluso si no tiene onclick directo en el HTML
    if (loginButton) {
        loginButton.addEventListener('click', mostrarDinamismo);
    }
    
    /**
     * Función que maneja los efectos dinámicos al hacer clic en el botón Entrar.
     * @param {Event} event - El objeto de evento del clic.
     */
    function mostrarDinamismo(event) {
        // Prevenir el envío real del formulario para que los efectos sean visibles
        event.preventDefault(); 
        
        // 1. Dinamismo de Movimiento (Sacudida/Error visual)
        
        // a. Añade la clase que activa la animación CSS (definida en style.css)
        loginContainer.classList.add('cuadro-movimiento');
        
        // b. Remueve la clase después de que termine la animación
        setTimeout(() => {
            loginContainer.classList.remove('cuadro-movimiento');
        }, 500); // El tiempo debe coincidir con la duración de la animación 'shake' en CSS (0.5s)

        // 2. Dinamismo de Visibilidad (Mostrar Mensaje Temporal)
        
        // a. Primero, nos aseguramos de que el mensaje esté visible
        mensajeDinamico.classList.add('mensaje-visible');
        mensajeDinamico.textContent = 'Verificando credenciales...'; // Cambia el texto
        
        // b. Oculta el mensaje automáticamente después de 3 segundos (3000 ms)
        setTimeout(() => {
            mensajeDinamico.classList.remove('mensaje-visible');
            // Opcional: limpiar el contenido después de que se oculte
            setTimeout(() => {
                mensajeDinamico.textContent = ''; 
            }, 500); // Pequeño retraso para asegurar que la transición de CSS terminó
            
        }, 3000); 
        
        // 3. (Opcional) Aquí iría la lógica de validación de campos reales
        // Por ejemplo, podrías llamar a una función que haga una solicitud (fetch) al servidor.
    }
});