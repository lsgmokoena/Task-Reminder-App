import React, { useState } from 'react';

function TaskItem({ task, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);
  const [newIsCompleted, setNewIsCompleted] = useState(task.isCompleted);

  const handleEdit = () => {
    if (!newTitle || !newDescription || !newDueDate) {
      alert("All fields must be filled to update!");
      return;
    }
    updateTask(task.title, {
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
      isCompleted: newIsCompleted,
    });
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="datetime-local"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <label>
            Completed:
            <input
              type="checkbox"
              checked={newIsCompleted}
              onChange={() => setNewIsCompleted(!newIsCompleted)}
            />
          </label>
          <button onClick={handleEdit}>Update Task</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {new Date(task.dueDate).toLocaleString()}</p>
          <p>Status: {task.isCompleted ? "Completed" : "Not Completed"}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.title)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TaskItem;
