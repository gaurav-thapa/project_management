import Tasks from "./Tasks/Tasks";

const SelectedProject = ({ project, tasks, onDelete, onAddTask, onDeleteTask }) => {
    const onDeleteHandler = () => {
        onDelete(project.id);
    };
    return (
        <div className='col-12 col-md-8 card p-4 mt-5'>
            <div className="d-flex justify-content-between">
                <h1>{project.title}</h1>
                <div>
                    <button className="btn btn-outline-danger" onClick={onDeleteHandler}>Delete</button>
                </div>
            </div>

            <p>{project.dueDate}</p>
            <p className="" style={{ whiteSpace: 'pre' }}>{project.description}</p>
            <hr></hr>
            <h5>TASKS</h5>
            <Tasks tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask}/>
        </div>
    );
};
export default SelectedProject;