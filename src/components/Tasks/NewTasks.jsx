import Input from '../UI/Input';
import { useState } from 'react';
const NewTasks = ({onAddTask}) => {
    const [task,setTask] = useState('');
    const onInputChangeHandler = (event) =>{
        setTask(event.target.value);
    };
    const onAddTaskHandler = () => {
        if(task.trim()===''){
            return;
        }
        onAddTask(task);
        setTask('');
    };
    return <div className='d-flex'>
        <Input required value={task} onChange={onInputChangeHandler} />
        <div>
            <button onClick={onAddTaskHandler} className='btn btn-outline-primary mx-3'>Add Task</button>
        </div>
    </div>
};
export default NewTasks;