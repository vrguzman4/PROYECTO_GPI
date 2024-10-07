document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        window.location.href = 'dashboard.html'; // Redirigir al dashboard
    } else {
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});