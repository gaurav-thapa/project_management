import Button from "../UI/Button";

const Sidebar = ({ onStartAddProject, projects, onSelectProject }) => {
    return <>
        <h3 className="text-uppercase text-white mt-3 mb-4">Your Projects</h3>
        <Button onClick={onStartAddProject} text='+ Add Project' />
        <div className="d-flex flex-column my-5">
            {projects.map(project =>
                <button key={project.id} onClick={() => { onSelectProject(project.id) }} className="text-start btn btn-success my-1 border-0">{project.title}</button>
            )}
        </div>
    </>
};
export default Sidebar;