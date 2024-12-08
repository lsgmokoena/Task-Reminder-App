import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      alert("Please fill in all fields!");
      return;  
    }

    const newTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      isCompleted: isCompleted,
    };
    
    addTask(newTask);

    setTitle('');
    setDescription('');
    setDueDate('');
    setIsCompleted(false);
  };

  return (
    <div className="add-task">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="datetime-local"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <label>
          Completed:
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
