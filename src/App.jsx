import { useState } from "react";
import ProjectList from "./Components/ProjectList";
import AddProjectForm from "./Components/AddProjectForm";
import Settings from "./Components/Settings";

const App = () => {
    const [projectList, setProjectList] = useState([]);

    const addProject = (newProject) => {
        setProjectList((prevProjectList) => [...prevProjectList, newProject]);
    };

    // Функция для удаления проекта по его id
    const deleteProject = (projectId) => {
        setProjectList((prevProjectList) => 
            prevProjectList.filter(project => project.id !== projectId)
        );
    };

    return (
        <div>
            <h1>Personal Project Manager</h1>
            <AddProjectForm onAddProject={addProject} />
            <ProjectList projectList={projectList} onDelete={deleteProject} />
            <Settings />
        </div>
    );
};

export default App;
