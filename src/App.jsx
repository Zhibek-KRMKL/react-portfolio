import { useState } from "react";
import ProjectList from "./Components/ProjectList";
import AddProjectForm from "./Components/AddProjectForm";
import Settings from "./Components/Settings";

const App = () => {
    const [projects, setProjects] = useState([]);

    const addProject = (newProject) => {
        setProjects((prevProjects) => [...prevProjects, newProject]);
    };

    return (
        <div>
            <h1>Personal Project Manager</h1>
            <AddProjectForm onAddProject={addProject}/>
            <ProjectList projects={projects}/>
            <Settings/>
        </div>
    );
};

export default App;
