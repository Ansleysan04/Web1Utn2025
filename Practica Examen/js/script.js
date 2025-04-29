document
  .getElementById("formRegistro")
  .addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    if (!nombre || !email || !telefono || !pais || !terminos) {
      alert("Por favor, completa todos los campos requeridos correctamente.");
      event.preventDefault();
      return;
    }

    if (!/^\d+$/.test(telefono)) {
      alert("El teléfono debe contener solo números.");
      event.preventDefault();
      return;
    }

    alert("✅ Usuario registrado con éxito");
  });
