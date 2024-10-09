document.getElementById("autorizacionesForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const paciente = document.getElementById("paciente").value;
    const documento = document.getElementById("documento").value;
    const direccion = document.getElementById("direccion").value;
    const medicamento = document.getElementById("medicamento").value;


    document.getElementById("mensaje").textContent = `La orden de los medicamentos para ${paciente} ha sido generada y será llevada a ${direccion}.`;
    document.getElementById("mensaje").style.color = "green"; 
});
