import AppName from './Components/AppName.jsx';
import AddToDo from './Components/AddToDo.jsx';
import ToDoItems from './Components/ToDoItems.jsx';
import NoTask from './Components/NoTask.jsx';
import ToDoItemContextProvider from './Store/ToDoTasks-Context.jsx';
import './App.css';





function App() {



  return (
    <ToDoItemContextProvider>
      <center className='todo-container align'>
        <AppName />
        <div className='item-Container'>
          <AddToDo />
          <ToDoItems />
          <NoTask></NoTask>
        </div>
      </center>
    </ToDoItemContextProvider>
  )
}

export default App;
