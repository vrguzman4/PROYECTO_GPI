document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;

    if (Object.keys(localStorage).length === 0) {
      alert("No hay usuarios registrados. Por favor, regístrate primero.");
      return;
    }

    const usuario = JSON.parse(localStorage.getItem("loginUser"));

    if (usuario === null) {
      alert("El usuario no existe. Por favor, regístrate primero.");
    } else if (usuario.password !== password) {
      alert("Contraseña incorrecta. Por favor, intenta de nuevo.");
    } else {
      window.location.href = "/PROYECTO_GPI/dashboard/dashboard.html";
    }
  });
