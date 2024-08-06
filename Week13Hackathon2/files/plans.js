const handleQuizSubmit = async (event) => {
    event.preventDefault();

    // Obtener respuestas del formulario
    const form = event.target;
    const feeling = form.feeling.value;
    const goal = form.goal.value;
    const exerciseFrequency = form.exerciseFrequency.value;
    const activityType = form.activityType.value;

    // Mostrar las respuestas en la consola para depuración
    console.log(`Feeling: ${feeling}, Goal: ${goal}, Exercise Frequency: ${exerciseFrequency}, Activity Type: ${activityType}`);

    try {
        // Enviar los datos al servidor
        const res = await fetch("http://localhost:3001/api/plans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ feeling, goal, exerciseFrequency, activityType })
        });

        if (!res.ok) throw new Error(`Error: ${res.statusText}`);
        
        const data = await res.json();
        console.log(`Response from backend: ${JSON.stringify(data)}`);

        // Mostrar el resultado al usuario
        const resultDiv = document.getElementById("plan-result");
        resultDiv.innerHTML = `
            <p>We recommend the following plan: <strong>${data.plan}</strong></p>
            <a href="plans/${data.plan.replace(/ /g, "-")}.pdf" download>Download Plan</a>
        `;
    } catch (error) {
        console.error(error);
        // Manejar el error
        const resultDiv = document.getElementById("plan-result");
        resultDiv.innerHTML = `<p>Sorry, an error occurred. Please try again later.</p>`;
    }
};


document.getElementById("quiz-form").addEventListener("submit", handleQuizSubmit);