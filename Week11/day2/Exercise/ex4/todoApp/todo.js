//we define the class that includes the methods to manipulate the class
class TodoList {
    constructor() {
        this.tasks = [];
    } //initialize an empty task list

    addTask(task) {
        this.tasks.push({ task, completed: false });
    } //add a task to the list with the status on false(incomplete).

    markComplete(index) {
        if (this.tasks[index] !== undefined) {
            this.tasks[index].completed = true;
        }
    } // Mark the tasks to complete or not.

    listTasks() {
        return this.tasks;
    } // return the list of the tasks with current status
}

export default TodoList;