// Bolunota: 'toggle' significa 'alternar'.
import React from 'react';
import TaskItem from '../TaskItem';

function TaskList({tasks, onDeleteTask, onToggleComplete}) {
    // El componente TaskList recibe las tareas task como prop
    if (tasks.length === 0) {
      return <p>No hay tareas aún.</p>
    }

    return (
       
        <ol>
          {tasks.map((task, index) => (
                    <TaskItem     

                    key={index}
                    task={task}
                    index={index}
                    onDeleteTask={onDeleteTask}
                    onToggleComplete={onToggleComplete}>

                    </TaskItem>
          )
         
          )}
        </ol>
    );
  }

export default TaskList