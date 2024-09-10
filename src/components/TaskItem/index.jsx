import React from 'react';
import './taskItem.css'; 


function TaskItem({ task, index, onDeleteTask, onToggleComplete }) {
  return (
    <li>
      <div className="task-box">
        <input 
          type="checkbox" 
          checked={task.completed}
          onChange={() => onToggleComplete(index)} 
        />
        <p>
          {task.completed ? 
          <del>{task.text}</del> 
          : 
          task.text}
          </p>

        <button onClick={() => onDeleteTask(index)}>🗑️</button>
      </div>
    </li>
  );
}

export default TaskItem;
