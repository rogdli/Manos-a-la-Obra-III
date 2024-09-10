import React, { useState } from 'react';
import './addTask.css';

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  }

  return (
    <div>
      <h2 className = "title">Lista de tareas de Rodrigo</h2>
      <input 
        className = "input-box"
        type="text"
        placeholder="Agregar tarea..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button className = 'add-button' 
              onClick={addTask}>
                Add
      </button>
    </div>
  );
}

export default AddTask;
