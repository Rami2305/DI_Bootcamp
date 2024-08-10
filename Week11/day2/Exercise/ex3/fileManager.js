const fs = require('fs');

// Fx to read the content of a file
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(`Error reading file from disk: ${err}`);
        } else {
            callback(data);
        }
    });
}

// Fx to write content on a file
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

//we define a fx that is generic as possible to be able to use it as base
// and then we can reuse it to differents moments