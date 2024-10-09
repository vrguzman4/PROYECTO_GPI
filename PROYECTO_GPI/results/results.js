const examenes = [
    {
        id: 1,
        nombre: "Hemograma",
        fecha: "2024-09-01",
        hora: "09:00 AM",
        recomendaciones: "Ayuno de 12 horas previo al examen.",
        resultado: "Normal",
        observaciones: "El hemograma muestra un recuento normal de glóbulos rojos, glóbulos blancos y plaquetas. No se observaron signos de anemia ni infecciones.",
        interpretacion: "Los valores están dentro de los límites normales, lo que indica un buen estado de salud hematológico.",
        conclusion: "Se recomienda continuar con chequeos anuales y mantener un estilo de vida saludable."
    },
    {
        id: 2,
        nombre: "Perfil Lipídico",
        fecha: "2024-09-15",
        hora: "10:30 AM",
        recomendaciones: "Ayuno de 12 horas, evitar grasas la noche anterior.",
        resultado: "Colesterol LDL: 120 mg/dL - Normal",
        observaciones: "El perfil lipídico muestra niveles adecuados de colesterol total, HDL y LDL. No se detectaron riesgos inmediatos de enfermedad cardiovascular.",
        interpretacion: "El LDL está en un rango saludable. El colesterol total y el HDL están también dentro de los límites recomendados.",
        conclusion: "Se sugiere mantener una dieta equilibrada y realizar ejercicio regularmente."
    },
    {
        id: 3,
        nombre: "Glucosa en Sangre",
        fecha: "2024-09-30",
        hora: "08:00 AM",
        recomendaciones: "Ayuno de 8 horas.",
        resultado: "90 mg/dL - Normal",
        observaciones: "La glucosa en ayunas está en un rango normal, indicando un buen control de la glucosa.",
        interpretacion: "Este resultado sugiere que no hay indicios de diabetes mellitus o intolerancia a la glucosa.",
        conclusion: "Se recomienda realizar pruebas de glucosa de rutina, especialmente si hay antecedentes familiares de diabetes."
    },
    {
        id: 4,
        nombre: "Prueba de Función Hepática",
        fecha: "2024-10-05",
        hora: "11:00 AM",
        recomendaciones: "Sin alcohol 48 horas antes del examen.",
        resultado: "Enzimas hepáticas dentro de los límites normales",
        observaciones: "Los niveles de AST y ALT están dentro del rango normal, lo que sugiere que no hay daño hepático evidente.",
        interpretacion: "Los resultados son normales, lo que indica que la función hepática está intacta.",
        conclusion: "Se recomienda realizar un seguimiento anual de las pruebas hepáticas y mantener hábitos saludables."
    },
    {
        id: 5,
        nombre: "Electrocardiograma (ECG)",
        fecha: "2024-10-10",
        hora: "01:00 PM",
        recomendaciones: "Evitar cafeína 24 horas antes.",
        resultado: "Ritmo sinusal, frecuencia normal.",
        observaciones: "El ECG muestra un ritmo cardíaco normal y no presenta signos de arritmias o bloqueos.",
        interpretacion: "El corazón está funcionando correctamente y no hay indicios de problemas cardíacos en este momento.",
        conclusion: "Se aconseja seguir chequeos regulares, especialmente si hay antecedentes familiares de enfermedad cardíaca."
    }
];

const examenesSelect = document.getElementById("examenes");
examenes.forEach(examen => {
    const option = document.createElement("option");
    option.value = examen.id;
    option.textContent = examen.nombre;
    examenesSelect.appendChild(option);
});

document.getElementById("verResultadosButton").addEventListener("click", function() {
    const examenSeleccionado = examenesSelect.value;
    const detallesDiv = document.getElementById("detalles");
    const resultadoDetalles = document.getElementById("resultadoDetalles");

    detallesDiv.innerHTML = "";

    if (examenSeleccionado) {
        const examen = examenes.find(ex => ex.id == examenSeleccionado);
        
        detallesDiv.innerHTML = `
        <p><strong>Nombre del Examen:</strong> ${examen.nombre}</p>
        <p><strong>Fecha:</strong> ${examen.fecha}</p>
        <p><strong>Hora:</strong> ${examen.hora}</p>
        <p><strong>Recomendaciones:</strong> ${examen.recomendaciones}</p>
        <p><strong>Resultado:</strong> ${examen.resultado}</p>
        <p><strong>Observaciones:</strong> ${examen.observaciones}</p>
        <p><strong>Interpretación:</strong> ${examen.interpretacion}</p>
        <p><strong>Conclusión:</strong> ${examen.conclusion}</p>
    `;
        
        resultadoDetalles.classList.remove("hidden");
    } else {
        alert("Por favor, selecciona un examen.");
    }
});
