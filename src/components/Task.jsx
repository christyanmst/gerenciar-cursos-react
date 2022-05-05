import React from 'react';

import './Task.css'

const Task = ({task, handleTaskClick}) => {
    return ( 
        <div 
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid red" } : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task-button'></button>
            </div>
        </div>
     );
}
 
export default Task;