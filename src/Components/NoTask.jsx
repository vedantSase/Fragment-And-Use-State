import './../App.css';
import { useContext } from 'react';
import { ToDoTasks_Context } from '../Store/ToDoTasks-Context.jsx';
function NoTask() {
    const { tasks } = useContext(ToDoTasks_Context);


    return tasks.length === 0 && <h4 className="NoTask">Enjoy Your Day...</h4>
}

export default NoTask;