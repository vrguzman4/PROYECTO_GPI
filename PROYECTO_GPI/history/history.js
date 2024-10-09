const historiasClinicas = [
    {
        fecha: "2024-10-05",
        antecedentes: `Es un paciente masculino de 35 años que ha sido diagnosticado con hipertensión arterial desde hace 5 años. En la última consulta, se le indicó un seguimiento regular debido a un ligero aumento en sus niveles de presión arterial.`,
        tratamiento: `El médico tratante, Dr. Gómez, ha recomendado un régimen de medicación que incluye:
        1. Medicamentos:
           - Enalapril: 10 mg una vez al día.
           - Hidroclorotiazida: 25 mg cada mañana.
        2. Recomendaciones de Estilo de Vida:
           - Dieta baja en sodio y rica en frutas y verduras.
           - Mantener una rutina de ejercicios de al menos 30 minutos diarios.
        3. Seguimiento:
           - Consulta médica cada dos meses para monitorear la presión arterial y ajustar la medicación si es necesario.`
    },
    {
        fecha: "2023-05-10",
        antecedentes: `El paciente Ha sido sometido a un chequeo general donde se le detectó hipercolesterolemia. Se le recomendó un cambio en su dieta y un seguimiento regular con pruebas de colesterol.`,
        tratamiento: `El médico tratante le indicó:
        1. Medicamentos:
           - Estatinas: para ayudar a controlar el colesterol.
        2. Recomendaciones de Estilo de Vida:
           - Adoptar una dieta mediterránea rica en grasas saludables, como el aceite de oliva, y evitar alimentos procesados.
           - Realizar caminatas diarias de al menos 40 minutos.
        3. Seguimiento:
           - Realizarse un perfil lipídico cada tres meses para monitorear los niveles de colesterol.`
    },
    {
        fecha: "2022-12-15",
        antecedentes: `El paciente acudió a la consulta por presentar episodios de fatiga y mareos. Tras realizarse varios exámenes, se descartó anemia y se recomendó realizar un control endocrinológico debido a antecedentes familiares de diabetes.`,
        tratamiento: `Las recomendaciones incluyeron:
        1. Medicamentos:
           - Ninguno, ya que se descartaron condiciones serias.
        2. Recomendaciones de Estilo de Vida:
           - Mantener un registro de su ingesta alimentaria y nivel de actividad física.
           - Realizar controles de glucosa en sangre cada seis meses.
        3. Seguimiento:
           - Consulta con un endocrinólogo para evaluación de riesgo de diabetes.`
    },
    {
        fecha: "2021-06-25",
        antecedentes: `El paciente se presentó con síntomas de resfriado persistente. Se le diagnosticó una infección respiratoria leve y se le indicaron cuidados básicos.`,
        tratamiento: `El tratamiento fue:
        1. Medicamentos:
           - Paracetamol: para el control de fiebre y dolor.
           - Antihistamínicos: para aliviar la congestión nasal.
        2. Recomendaciones de Estilo de Vida:
           - Mantenerse hidratado y descansar lo suficiente.
           - Evitar el contacto con personas enfermas para prevenir contagios.
        3. Seguimiento:
           - Volver a consulta si los síntomas no mejoran en una semana.`
    },
    {
        fecha: "2020-11-02",
        antecedentes: `El paciente fue evaluado como parte de un chequeo de rutina y se le recomendó vacunarse contra la influenza debido a su historial de enfermedades respiratorias.`,
        tratamiento: `El médico le indicó:
        1. Medicamentos:
           - Vacuna contra la influenza: administrada durante la consulta.
        2. Recomendaciones de Estilo de Vida:
           - Mantener buenas prácticas de higiene, como el lavado frecuente de manos.
           - Seguir una dieta balanceada para fortalecer el sistema inmunológico.
        3. Seguimiento:
           - Controlar los efectos secundarios de la vacuna y volver a consulta si presenta reacciones adversas.`
    }
];

document.getElementById("consultButton").addEventListener("click", function () {
    const selectedIndex = document.getElementById("historiaSelector").value;
    const username = JSON.parse(localStorage.getItem("loginUser"));

    if (username && selectedIndex !== "") {
        const historiaSeleccionada = historiasClinicas[selectedIndex];

        const antecedents = historiaSeleccionada.antecedentes;
        const treatment = historiaSeleccionada.tratamiento;

        document.getElementById("antecedents").textContent = antecedents;
        document.getElementById("treatment").textContent = treatment;

        document.getElementById("medicalHistory").classList.remove("hidden");
    } else {
        alert("Por favor, seleccione una historia clínica y asegúrese de que hay un usuario logueado.");
    }
});
