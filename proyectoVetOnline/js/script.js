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
