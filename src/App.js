import React, { useState } from 'react';
import Navbar from './components/navbar'; 
import AddTask from './components/AddTask'; 
import TaskList from './components/TaskList'; 
import './App.css';  // Your custom styles

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskTitle) => {
    setTasks(tasks.filter(task => task.title !== taskTitle));
  };

  const updateTask = (oldTitle, newTask) => {
    setTasks(tasks.map(task =>
      task.title === oldTitle ? { ...task, ...newTask } : task
    ));
  };

  return (
    <div className="App">
      <Navbar />
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
