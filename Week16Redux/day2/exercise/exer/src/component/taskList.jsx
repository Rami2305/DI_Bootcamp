import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice'

const TaskList = ({ selectedDay, onEditTask }) => {
    // // Obtener las tareas para el día seleccionado desde el estado de Redux
    const tasks = useSelector((state) => state.tasks.tasksByDay[selectedDay] || []);
    const dispatch = useDispatch();
  
    // Función para manejar la eliminación de una tarea
    const handleDeleteTask = (taskId) => {
      dispatch(deleteTask({ day: selectedDay, taskId }));
    };
    

    const handleEditTask = (taskId, task) => {
      onEditTask(taskId, task);
    }

    return (
      <div>
        <h2>Tasks for {selectedDay}</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleEditTask(index, task)}>Edit</button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;