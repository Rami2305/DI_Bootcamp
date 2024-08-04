const express = require('express');
const server = express();

const taskRoutes = require("./routes/routes.js");
const { readTaskJson, writeTaskJson } = require('./models/models');

server.use(express.static('files'));
server.use(express.urlencoded({ extended: true }));

// Ruta para el portal principal
// server.get('/', (req, res) => {
//   res.send('¡asdasdasd');
// });

// Ruta para el envío del formulario
// server.post('/submit', (req, res) => {
//     const { name, email, age } = req.body;
//     console.log(`Name: ${name}, E-mail: ${email}, Age: ${age}`);
//     res.send('Send');
// });

server.post('/submit', (req, res) => {
    const { name, email, age } = req.body; // 1
    const task = { name, email, age }; // 2

    // 3. Leer tareas existentes
    let tasks = readTaskJson();


    if (!Array.isArray(tasks)) {
        console.log("Tasks is not an array. Resetting to empty array.");
        tasks = [];
    }
    // 4. Agregar la nueva tarea
    tasks.push(task);

    // 5. Escribir las tareas actualizadas en el archivo
    writeTaskJson(tasks);

    // 6. Redirigir a la página de planes de acción
    res.redirect('plans.html');
});


// server.listen(port, () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });

server.use("/tasks", taskRoutes);

server.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`);
});

