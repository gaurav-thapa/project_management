import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import CreateProject from './components/CreateProject';
import NoProjectSelected from './components/NoProjectSelected';
import { useState } from 'react';
import SelectedProject from './components/SelectedProject';
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const addTaskHandler = (task) => {

    setProjectState(prev => {
      const newTask = {
        id: Math.random(),
        text: task,
        projectId: projectState.selectedProjectId,
      }
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      }
    })
  };
  const deleteTaskHandler = (id) => {
    setProjectState(prev => {
      const updatedTasks = prev.tasks.filter(task => task.id !== id);
      return {
        ...prev,
        tasks: updatedTasks,
      }
    })
  };

  const onStartAddProjectHandler = () => {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: null,
      }
    });
  }

  const addProjectHandler = (projectData) => {
    setProjectState(prev => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      }
    })
  };

  const cancelProjectHandler = () => {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
      }
    });
  };

  const onSelectProject = (id) => {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: id,
      }
    })
  };
  const onDeleteSelectedProject = (id) => {
    const updatedProjects = projectState.projects.filter(project => project.id !== id);
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: updatedProjects,
      }
    });

  };

  let content;
  if (projectState.selectedProjectId === null) {
    content = <CreateProject onAdd={addProjectHandler} onCancel={cancelProjectHandler} />
  }
  else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={onStartAddProjectHandler} />
  }
  else {
    const filterProjectId = projectState.selectedProjectId;
    const project = projectState.projects.filter(proj => proj.id === filterProjectId);
    const filteredTasks = projectState.tasks.filter(task => task.projectId === filterProjectId);
    content = <SelectedProject tasks={filteredTasks} onAddTask={addTaskHandler} onDeleteTask={deleteTaskHandler} project={project[0]} onDelete={onDeleteSelectedProject} />
  }

  return (
    <div className='container-fluid row m-0 p-0 d-flex min-vh-100'>
      <div className='col-sm-3 bg-black p-4'>
        <Sidebar onStartAddProject={onStartAddProjectHandler} projects={projectState.projects} onSelectProject={onSelectProject} />
      </div>
      <div className='col-sm-9 d-flex flex-column align-items-center'>
        {content}
      </div>
    </div>
  )
}

export default App
