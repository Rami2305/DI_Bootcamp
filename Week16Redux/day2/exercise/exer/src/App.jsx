import React, { useState } from 'react'
import TaskList from './component/taskList'
import DatePicker from './component/daySelector';
import TaskManager from './component/taskManager';
import './App.css'

const App = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskContent, setEditingTaskContent] = useState('');


  const handleEditTask = (taskId, taskContent) => {
    setEditingTaskId(taskId);
    setEditingTaskContent(taskContent);
  };
  const clearEditingTask = () => {
    setEditingTaskId(null);
    setEditingTaskContent('');
  };


  return (
    <div>
      <DatePicker selectedDay={selectedDay} onSelectDay={setSelectedDay} />
      {selectedDay && (
        <>
          <TaskList selectedDay={selectedDay} onEditTask={handleEditTask} />
          <TaskManager 
            selectedDay={selectedDay}
            editingTaskId={editingTaskId}
            editingTaskContent={editingTaskContent}
            clearEditingTask={clearEditingTask} />
        </>
      )}
    </div>
  );
};

export default App;