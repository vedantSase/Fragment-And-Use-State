import { createContext } from "react";
import { useReducer } from "react";
export const ToDoTasks_Context = createContext();


const ToDOItemReduce = (currentToDoItems, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [{ task: action.payload.taskName, date: action.payload.taskDate }, ...currentToDoItems];
        case 'DELETE_TASK':
            return currentToDoItems.filter(item => item.task !== action.payload.taskName);
        default:
            return currentToDoItems;
    }
}


const ToDoItemContextProvider = ({ children }) => {

    let initialTasks = [{ "task": "Buy Milk", "date": "06/17/2025" },
    { "task": "Walk the Dog", "date": "06/18/2025" }];

    // handling new tasks   (adding new tasks)
    // const [currentTasks, setTasks] = useState(initialTasks);

    // instead of using useState, we can use useReducer to handle the tasks
    const [currentTasks, dispatchToDoItems] = useReducer(ToDOItemReduce, initialTasks);
    // Function to add a new task   
    const addNewTask = (taskName, taskDate) => {
        console.log(`tasName = ${taskName} at ${taskDate} added...`);
        const newItemAction = {
            type: 'ADD_TASK',
            payload: {
                taskName: taskName,
                taskDate: taskDate
            }
        }
        dispatchToDoItems(newItemAction);

        // Using the reducer function to add a new task in line number 10 better than using useState
        // setTasks((currentTasks) => [{
        //   task: taskName,
        //   date: taskDate
        // }, ...currentTasks]);
    };


    // Deleting the to do items
    const deleteTask = (nameOfTask) => {
        console.log(`${nameOfTask} deleted...`);
        // const remainedTasks = currentTasks.filter(item => item.task !== nameOfTask);
        // setTasks(remainedTasks);

        // instead of using useState, we can use useReducer to handle the tasks
        const deleteItemAction = {
            type: 'DELETE_TASK',
            payload: {
                taskName: nameOfTask
            }
        }
        dispatchToDoItems(deleteItemAction);  // Using the reducer function to delete a task in line number 10 better than using useState
    }

    return (
        <ToDoTasks_Context.Provider value={{
            tasks: currentTasks,
            addNewTask,
            deleteTask
        }}>
            {children}
        </ToDoTasks_Context.Provider>
    )
}

export default ToDoItemContextProvider;