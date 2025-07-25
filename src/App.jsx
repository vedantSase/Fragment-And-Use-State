import AppName from './Components/AppName.jsx';
import AddToDo from './Components/AddToDo.jsx';
import ToDoItems from './Components/ToDoItems.jsx';
import NoTask from './Components/NoTask.jsx';
import { useState } from 'react';

import './App.css';
function App() {

  let initialTasks = [{ "task": "Buy Milk", "date": "06/17/2025" },
  { "task": "Walk the Dog", "date": "06/18/2025" }];

  // handling new tasks   (adding new tasks)
  const [currentTasks, setTasks] = useState(initialTasks);

  const handleNewTask = (taskName, taskDate) => {
    console.log(`tasName = ${taskName} at ${taskDate}`);
    const newTaskList = [...currentTasks, {
      task: taskName,
      date: taskDate
    }]
    setTasks(newTaskList);
  }


  // Deleting the to do items
  const deleteTask = (nameOfTask) => {
    console.log(`${nameOfTask} deleted...`);
    const remainedTasks = currentTasks.filter(item => item.task !== nameOfTask);
    setTasks(remainedTasks);
  }

  return (
    <center className='todo-container align'>
      <AppName />
      <div className='item-Container'>
        <AddToDo onNewTask={handleNewTask} />
        <ToDoItems tasks={currentTasks} deleteTask={deleteTask} />
        {currentTasks.length <= 0 && <NoTask></NoTask>}
      </div>
    </center>
  )
}

export default App;
