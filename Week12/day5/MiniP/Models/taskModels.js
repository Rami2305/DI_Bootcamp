const fs = require('fs');


let task = [];

module.exports = {
    readTaskJson: () => {
        try {
            const taskJson = fs.readFileSync('task.json','utf-8');
            task = JSON.parse(taskJson) || [];
            return task
        } catch (error) {
            console.log(error);
        }
    },
    writeTaskJson: (taskJson) => {
        fs.writeFile('task.json', JSON.stringify(taskJson), 'utf-8', (err) => {
            if (err) return console.log(err);
            console.log('task saved');
        });
    }
}