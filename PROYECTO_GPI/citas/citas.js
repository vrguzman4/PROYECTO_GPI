document.getElementById('citasForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const especialista = document.getElementById('especialista').value;

    if (nombre && fecha && hora && especialista) {
        const resultado = `Cita agendada para ${nombre} con ${especialista} el ${fecha} a las ${hora}.`;
        document.getElementById('resultado').textContent = resultado;
    } else {
        document.getElementById('resultado').textContent = 'Por favor, complete todos los campos.';
    }
});