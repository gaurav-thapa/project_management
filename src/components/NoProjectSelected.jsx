import Button from "./UI/Button"

const NoProjectSelected = ({ onStartAddProject }) => {
    return <div className="my-auto text-center">
        <i className="fa-regular fa-pen-to-square fa-beat fa-2xl p-5" style={{ color: '#3765b3' }}></i>
        <h2>No Project Selected</h2>
        <p>Select a project or get started with a new one</p>
        <Button onClick={onStartAddProject} text="Create a Project" />
    </div>;
};
export default NoProjectSelected;