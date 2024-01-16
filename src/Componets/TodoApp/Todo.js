import React, { useEffect, useState } from 'react'
import "./Todo.css";
import AddTask from './AddTask';
import ListTasks from './ListTasks';

const Todo = () => {
  const [tasks,setTasks] = useState( [])
  useEffect(() =>{

    document.title=`you have ${tasks.length} pending task(s)`
  });
  
  const addTask =(title)=>{
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
   const removeTask = (index)=>{
     const newTask = [...tasks]
     newTask.splice(index,1);
     setTasks(newTask)
  }
  return (
    
    <>
        <div className='todo-container'>
            <div className='header'>TODO APP</div>
            <div className='add-task'>Add Task</div>
               <AddTask addTask={addTask} />
            <div  className='tasks'>List task</div>
              {tasks.map((task, index) => (
                <ListTasks  task={task} removeTask={removeTask} 
                index={index} key={index}/>
              ))}
              
               
        </div>
    </> 
  )
}

export default Todo