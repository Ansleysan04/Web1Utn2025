document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("registroForm");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    validarFormulario();
  });

  function validarFormulario() {
    let valido = true;
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const pais = document.getElementById("pais");
    const terminos = document.querySelector('.terminos input[type="checkbox"]');

    // Validar Nombre
    if (nombre.value.trim() === "") {
      mostrarError(nombre, "El nombre es requerido.");
      valido = false;
    } else {
      limpiarError(nombre);
    }

    // Validar Correo Electrónico
    if (email.value.trim() === "") {
      mostrarError(email, "El correo electrónico es requerido.");
      valido = false;
    } else if (!isValidEmail(email.value.trim())) {
      mostrarError(email, "El correo electrónico no es válido.");
      valido = false;
    } else {
      limpiarError(email);
    }

    // Validar Teléfono (solo números)
    if (telefono.value.trim() === "") {
      mostrarError(telefono, "El teléfono es requerido.");
      valido = false;
    } else if (!/^[0-9]+$/.test(telefono.value.trim())) {
      mostrarError(telefono, "El teléfono debe contener solo números.");
      valido = false;
    } else {
      limpiarError(telefono);
    }

    // Validar País
    if (pais.value === "") {
      mostrarError(pais, "Por favor, selecciona un país.");
      valido = false;
    } else {
      limpiarError(pais);
    }

    // Validar Términos y Condiciones
    if (!terminos.checked) {
      mostrarError(
        terminos.parentNode,
        "Debes aceptar los términos y condiciones."
      );
      valido = false;
    } else {
      limpiarError(terminos.parentNode);
    }

    if (valido) {
      alert("¡Registro exitoso!");
      formulario.reset();
      // Aquí iría la lógica para enviar los datos del formulario al servidor
    }
  }

  function mostrarError(elemento, mensaje) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-mensaje";
    errorDiv.textContent = mensaje;
    elemento.parentNode.insertBefore(errorDiv, elemento.nextSibling);
    elemento.classList.add("error-input");
  }

  function limpiarError(elemento) {
    const errorDiv = elemento.parentNode.querySelector(".error-mensaje");
    if (errorDiv) {
      errorDiv.remove();
    }
    elemento.classList.remove("error-input");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
