document.addEventListener("DOMContentLoaded", function () {
  const contratarButtons = document.querySelectorAll(".contratar-btn");
  const cancelarButtons = document.querySelectorAll(".cancelar-btn");
  const paymentForms = document.querySelectorAll(".payment-form");

  contratarButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const plan = this.dataset.plan.toLowerCase();
      paymentForms.forEach((form) => {
        form.style.display = "none"; // Ocultar todos los formularios
      });
      const formToShow = document.getElementById(`form-${plan}`);
      if (formToShow) {
        formToShow.style.display = "block";
      }
    });
  });

  cancelarButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const formToHide = this.closest(".payment-form");
      if (formToHide) {
        formToHide.style.display = "none";
      }
    });
  });

  // Opcional: Evitar el envío real del formulario (para este ejemplo)
  paymentForms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert(
        "¡Pago realizado con éxito! (Funcionalidad de pago real no implementada)"
      );
      this.style.display = "none"; // Ocultar el formulario después del "pago"
    });
  });
});

let testimonios = document.querySelectorAll(".testimonio");
let indice = 0;

function mostrarSiguienteTestimonio() {
  testimonios[indice].classList.remove("activo");
  indice = (indice + 1) % testimonios.length;
  testimonios[indice].classList.add("activo");
}

setInterval(mostrarSiguienteTestimonio, 5000);
//Nuevo script para validar el formulario y mostrar alerta

document
  .getElementById("formulario-contacto")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Verificar si todos los campos están llenos
    if (nombre && correo && telefono && mensaje) {
      alert("¡Mensaje enviado con éxito!");
      this.reset(); // Limpia el formulario después de enviar
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });
