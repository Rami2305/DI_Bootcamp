import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/tasksSlice';


const TaskManager = ({ selectedDay, editingTaskId, editingTaskContent, clearEditingTask }) => {
  const [newTask, setNewTask] = useState('');
  const [editTaskContent, setEditTaskContent] = useState(editingTaskContent || '');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTask) {
      dispatch(addTask({ day: selectedDay, task: newTask }));
      setNewTask('');
    }
  };

  const handleEditTask = () => {
    if (editingTaskId !== null && editTaskContent) {
      dispatch(editTask({ day: selectedDay, taskId: editingTaskId, updatedTask: editTaskContent }));
      clearEditingTask();  // Limpia la tarea en edición después de guardar
      setEditTaskContent(''); // Limpia el formulario de edición
    }
  };

  // Cargar automáticamente el contenido de la tarea cuando cambia el task a editar
  React.useEffect(() => {
    setEditTaskContent(editingTaskContent || '');
  }, [editingTaskContent]);

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      <h3>Edit Task</h3>
      <input
        type="text"
        value={editTaskContent}
        onChange={(e) => setEditTaskContent(e.target.value)}
        placeholder="Edit task"
      />
      <button onClick={handleEditTask}>Save Task</button>
    </div>
  );
};

export default TaskManager;

