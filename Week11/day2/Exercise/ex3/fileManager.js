const fs = require('fs');

// Función para leer el contenido de un archivo
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`);
        } else {
            callback(data);
        }
    });
}

// Función para escribir contenido en un archivo
function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, 'utf-8', (err) => {
        if (err) {
            console.error(`Error writing file to disk: ${err}`);
        } else {
            callback();
        }
    });
}

module.exports = { readFile, writeFile };

// Se definen lo mas generica posibles para poder usar este archivo como base,
// y de esta manera podemos reutilizar para demas cosas en diferentes momentos