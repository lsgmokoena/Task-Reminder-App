import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <div className="task-list">
      {/* Display a message if no tasks are available */}
      {tasks.length === 0 && <p>No tasks added yet!</p>}

      {/* Map through the tasks and pass necessary props */}
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
