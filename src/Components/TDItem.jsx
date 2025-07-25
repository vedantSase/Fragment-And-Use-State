import { MdDeleteOutline } from "react-icons/md";
function TDItem({ task, date, deleteTask }) {
    return (
        <div className="row Kg-row">
            <div className="col-6">
                {task}
            </div>
            <div className="col-4">
                {date}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger kg-button" onClick={() =>
                    deleteTask(task)
                }><MdDeleteOutline /></button>
            </div>
        </div>
    );
}

export default TDItem;