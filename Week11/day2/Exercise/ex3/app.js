const { readFile, writeFile } = require('./fileManager');

// Leer el archivo "Hello World.txt"
readFile('HelloWorld.txt', (data) => {
    console.log('Content of Hello World.txt:', data);

    // Escribir en el archivo "Bye World.txt
    writeFile('ByeWorld.txt', 'Writing to the file', () => {
        console.log('Content written to Bye World.txt');
    });
});