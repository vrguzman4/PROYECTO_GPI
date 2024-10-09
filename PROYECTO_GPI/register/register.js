document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const password = document.getElementById('password').value;

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        password: password
    };

    localStorage.setItem("loginUser", JSON.stringify(usuario));
    document.getElementById('mensaje').textContent = 'Usuario registrado exitosamente.';
    window.location.href = '/PROYECTO_GPI/login/login.html';
    document.getElementById('registerForm').reset();
});
