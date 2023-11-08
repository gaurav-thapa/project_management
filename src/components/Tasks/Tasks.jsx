import { useState } from "react";
import NewTasks from "./NewTasks"

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
    const addTask = (task) => {
        onAddTask(task);
    };
    return <>
        <NewTasks onAddTask={addTask} />
        {tasks ? '' : <p>This project does not have any tasks yet.</p>}

        <ul className="list-group list-group-flush">
            {tasks ? tasks.map(task => <li  key={task.id} className="list-group-item d-flex justify-content-between">{task.text} <button className="btn btn-light" onClick={()=>{onDeleteTask(task.id)}}>Delete</button></li>) : ''}
        </ul>
    </>
};
export default Tasks;