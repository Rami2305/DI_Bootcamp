import TodoList from './todo.js';

const myTodoList = new TodoList();

// Adding some tasks
myTodoList.addTask('checking exercise');
myTodoList.addTask('writing code');
myTodoList.addTask('adding tasks');

// Marking some tasks as completed
myTodoList.markComplete(0); // 
myTodoList.markComplete(2); //

// List of tasks with status
console.log(myTodoList.listTasks());