import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

function AppToDo({ onNewTask }) {

    // State to hold and updates the task name and date
    const [taskName, setTaskName] = useState("");
    const [taskDate, setTaskDate] = useState("");

    const handleTaskName = (event) => {
        setTaskName(event.target.value);
    }
    const handleTaskDate = (event) => {
        setTaskDate(event.target.value);
    }

    const addButtonClicked = (event) => {
        console.log(event);
        event.preventDefault();
        onNewTask(taskName, taskDate);
        setTaskName("");
        setTaskDate("");
    }

    return (
        <form className="row Kg-row" onSubmit={addButtonClicked}>
            <div className="col-6">
                <input type="text" placeholder="Enter to do here" onChange={handleTaskName} value={taskName} />
            </div>
            <div className="col-4">
                <input type="date" onChange={handleTaskDate} value={taskDate} />
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-success kg-button" onClick={addButtonClicked}><MdAddCircleOutline /></button>
            </div>
        </form>
    )
}

export default AppToDo;