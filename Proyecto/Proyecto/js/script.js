// Función para validar el formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener los valores de los campos
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            const terminos = document.getElementById('terminos').checked;
            
            // Validar el nombre (no vacío)
            if (nombre.trim() === '') {
                mostrarError('nombre', 'Por favor ingresa tu nombre');
                return;
            } else {
                ocultarError('nombre');
            }
            
            // Validar el email (formato correcto)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                mostrarError('email', 'Por favor ingresa un email válido');
                return;
            } else {
                ocultarError('email');
            }
            
            // Validar el teléfono (opcional, pero si se proporciona debe ser válido)
            if (telefono !== '') {
                const telefonoRegex = /^\d{8,10}$/;
                if (!telefonoRegex.test(telefono)) {
                    mostrarError('telefono', 'Por favor ingresa un número de teléfono válido (8-10 dígitos)');
                    return;
                } else {
                    ocultarError('telefono');
                }
            }
            
            // Validar el mensaje (no vacío)
            if (mensaje.trim() === '') {
                mostrarError('mensaje', 'Por favor ingresa tu mensaje');
                return;
            } else {
                ocultarError('mensaje');
            }
            
            // Validar términos y condiciones
            if (!terminos) {
                mostrarError('terminos', 'Debes aceptar los términos y condiciones');
                return;
            } else {
                ocultarError('terminos');
            }
            
            // Si todo está validado, mostrar un mensaje de éxito
            alert('¡Gracias por contactarnos! Te responderemos pronto.');
            contactForm.reset();
        });
    }
});

// Función para mostrar mensajes de error
function mostrarError(idCampo, mensaje) {
    const campo = document.getElementById(idCampo);
    campo.classList.add('is-invalid');
    
    const mensajeError = campo.nextElementSibling;
    if (mensajeError && mensajeError.classList.contains('invalid-feedback')) {
        mensajeError.textContent = mensaje;
    }
}

// Función para ocultar mensajes de error
function ocultarError(idCampo) {
    const campo = document.getElementById(idCampo);
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
}

// Efecto simple para el menú de navegación
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#0d6efd';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = '';
            }
        });
    });
});

// Carrusel simple para la página de testimonios
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página de testimonios
    const testimoniosCarrusel = document.getElementById('testimonios-carrusel');
    
    if (testimoniosCarrusel) {
        const testimonios = document.querySelectorAll('.testimonio-item');
        let currentIndex = 0;
        
        // Función para mostrar el testimonio actual
        function mostrarTestimonio(index) {
            testimonios.forEach((testimonio, i) => {
                if (i === index) {
                    testimonio.style.display = 'block';
                } else {
                    testimonio.style.display = 'none';
                }
            });
        }
        
        // Mostrar el primer testimonio inicialmente
        mostrarTestimonio(currentIndex);
        
        // Botón siguiente
        document.getElementById('testimonio-siguiente').addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % testimonios.length;
            mostrarTestimonio(currentIndex);
        });
        
        // Botón anterior
        document.getElementById('testimonio-anterior').addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + testimonios.length) % testimonios.length;
            mostrarTestimonio(currentIndex);
        });
        
        // Cambiar automáticamente cada 5 segundos
        setInterval(function() {
            currentIndex = (currentIndex + 1) % testimonios.length;
            mostrarTestimonio(currentIndex);
        }, 5000);
    }
});

// Menú desplegable para móviles
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar-collapse');
    
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('show');
        });
    }
});