import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

const App = () =>{
  const [tasks, setTasks] = useState([
    {
      id : '1',
      title: 'Curso de JAVA - Avançado',
      completed: false,
    },
    {
      id : '2',
      title: 'Curso de Python - Básico',
      completed: true,
    }
  ]);

  const handleTaskClick = (taskId) =>{
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed}

      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [
        ...tasks,
        {
          title: taskTitle,
          id: uuidv4(),
          completed : false,
      },
    ]
    setTasks(newTasks)
  }

  const handleTaskRemove = (taskId) => {
    tasks.splice(tasks.indexOf(tasks.find((i) => i.id === taskId)),1);
    setTasks([...tasks]);
  }

  return(
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>
      </div>
    </>
  )
}

export default App