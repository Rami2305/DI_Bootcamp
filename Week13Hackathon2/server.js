const express = require('express');
const server = express();

const taskRoutes = require("./routes/routes.js");
const taskModel = require('./models/models.js');

server.use(express.static('files'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Ruta para el portal principal
// server.get('/', (req, res) => {
//   res.send('¡asdasdasd');
// });

// server.post('/submit', async (req, res) => {
//     const { name, email, age } = req.body; // Extraer datos del formulario

//     try {
//         // Crear una nueva tarea en la base de datos
//         await taskModel.createTask({ name, email, age });
//         // Redirigir a la página de planes de acción
//         res.redirect('plans.html');
//     } catch (error) {
//         console.error("Error when try to create account:", error);
//         res.status(500).send("There was an error");
//     }
// });
server.post('/submit', async (req, res) => {
    const { name, email, age, feeling, goal, exerciseFrequency, activityType } = req.body;

    try {
        await taskModel.createTask({ name, email, age, feeling, goal, exerciseFrequency, activityType });
        res.redirect('plans.html');
    } catch (error) {
        console.error("Error when trying to create account:", error);
        res.status(500).send("There was an error");
    }
});

server.post('/api/plans', (req, res) => {
    const { feeling, goal, exerciseFrequency, activityType } = req.body;

    // Lógica para determinar el plan basado en las respuestas
    let recommendedPlan;

    // Aquí puedes implementar la lógica para determinar el plan
    if (feeling === 'Stressed' && goal === 'Relaxed') {
        recommendedPlan = 'Gentle Yoga and Meditation';
    } else if (feeling === 'Anxious' && goal === 'Calm') {
        recommendedPlan = 'Deep Breathing and Guided Imagery';
    } else if (feeling === 'Tired' && goal === 'Energized') {
        recommendedPlan = 'High-Intensity Interval Training';
    } else if (feeling === 'Happy' && goal === 'Focused') {
        recommendedPlan = 'Mindfulness and Concentration Exercises';
    } else {
        recommendedPlan = 'General Well-being Plan';
    }

    // Enviar el plan como respuesta
    res.json({ plan: recommendedPlan });
});

server.use("/tasks", taskRoutes);

server.listen(process.env.PORT || 3001, () => {
    console.log(`Server run on port ${process.env.PORT || 3001}`);
});