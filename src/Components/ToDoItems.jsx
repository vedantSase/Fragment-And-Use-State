import TDItem from "./TDItem";
function ToDoItems({ tasks, deleteTask }) {
    return (
        <div className="items-container ">
            {tasks.map((TDtask) => (<TDItem key={TDtask.task} task={TDtask.task} date={TDtask.date} deleteTask={deleteTask}></TDItem>
            ))}
        </div>
    );
}

export default ToDoItems;