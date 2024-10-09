document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mensaje = document.getElementById('chat-input').value;
    const chatBox = document.getElementById('messages');
    
    let chatHistory = JSON.parse(localStorage.getItem('chat')) || [];
    chatHistory.push({ sender: 'user', text: mensaje });
    localStorage.setItem('chat', JSON.stringify(chatHistory));

    chatBox.innerHTML += `<li class="message user"><span>Tú</span><p>${mensaje}</p></li>`;

    document.getElementById('chat-input').value = '';

    const respuestaMedico = obtenerRespuesta(mensaje);
    chatHistory.push({ sender: 'bot', text: respuestaMedico });
    localStorage.setItem('chat', JSON.stringify(chatHistory));

    chatBox.innerHTML += `<li class="message bot"><span>Médico</span><p>${respuestaMedico}</p></li>`;
    
    chatBox.scrollTop = chatBox.scrollHeight;
});

function obtenerRespuesta(mensaje) {
    const lowerInput = mensaje.toLowerCase();

    if (lowerInput.includes("dolor") || lowerInput.includes("me duele")) {
        return "Es importante que descanses y te mantengas hidratado. Si el dolor persiste, te recomiendo que consultes a un médico.";
    } else if (lowerInput.includes("síntomas") || lowerInput.includes("síntoma")) {
        return "Por favor, describe tus síntomas para que pueda ayudarte mejor.";
    } else if (lowerInput.includes("cita") || lowerInput.includes("agendar")) {
        return "Puedes agendar una cita médica llamando al número 123-456-789 o utilizando nuestra aplicación.";
    } else if (lowerInput.includes("examen") || lowerInput.includes("resultado")) {
        return "Los resultados de los exámenes suelen estar disponibles en 24-48 horas. Asegúrate de revisar la sección de resultados en nuestra aplicación.";
    } else if (lowerInput.includes("medicamento") || lowerInput.includes("receta")) {
        return "Asegúrate de seguir las indicaciones de tu médico y de tomar los medicamentos según lo prescrito.";
    } else {
        return "Lo siento, no entiendo tu pregunta. ¿Podrías ser más específico?";
    }
}
