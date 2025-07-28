import { useContext, useRef } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { ToDoTasks_Context } from "../Store/ToDoTasks-Context.jsx";
function AppToDo() {

    // State to hold and updates the task name and date
    // const [taskName, setTaskName] = useState("");
    // const [taskDate, setTaskDate] = useState("");

    // instead of useState, we can use useRef to avoid re-rendering
    const taskNameElement = useRef();
    const taskDateElement = useRef();

    //  after using useRef, we can use the current property to access the value, no need following the state update pattern
    // const handleTaskName = (event) => {
    //     setTaskName(event.target.value);
    // }
    // const handleTaskDate = (event) => {
    //     setTaskDate(event.target.value);
    // }

    // extracting the addNewTask function from context(value) object
    const { addNewTask } = useContext(ToDoTasks_Context);
    const addButtonClicked = (event) => {
        // console.log(event);
        event.preventDefault();
        const taskName = taskNameElement.current.value;
        const taskDate = taskDateElement.current.value;
        addNewTask(taskName, taskDate);
        taskNameElement.current.value = "";
        taskDateElement.current.value = "";
    }

    return (
        <form className="row Kg-row" onSubmit={addButtonClicked}>
            <div className="col-6">
                <input type="text" ref={taskNameElement} placeholder="Enter to do here" />
            </div>
            <div className="col-4">
                <input type="date" ref={taskDateElement} />
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-success kg-button" onClick={addButtonClicked}><MdAddCircleOutline /></button>
            </div>
        </form>
    )
}

export default AppToDo;