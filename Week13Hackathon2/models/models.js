const fs = require('fs');

let task = [];

module.exports = {
    readTaskJson: () => {
        try {
            const taskJson = fs.readFileSync('task.json','utf-8');
            task = JSON.parse(taskJson) || [];
            return task
        } catch (error) {
            console.log("Error reading JSON file:", error);
            return [];
        }
    },
    writeTaskJson: (taskJson) => {
        fs.writeFile('task.json', JSON.stringify(taskJson, null, 2), 'utf-8', (err) => {
            if (err) return console.log("Error reading JSON file:", err);
            console.log('task saved');
        }
    )}
}