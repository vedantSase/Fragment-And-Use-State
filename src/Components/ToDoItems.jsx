import { useContext } from "react";
import { ToDoTasks_Context } from "../Store/ToDoTasks-Context.jsx";
import TDItem from "./TDItem";
function ToDoItems() {
    // Using useContext to get the tasks from the context
    const { tasks, deleteTask } = useContext(ToDoTasks_Context);
    // console.log(ToDOTasksFromContext);
    return (
        <div className="items-container ">
            {tasks.map((TDtask) => (<TDItem key={TDtask.task} task={TDtask.task} date={TDtask.date} ></TDItem>
            ))}
        </div>
    );
}

export default ToDoItems;