import { useState } from "react";
import ProjectList from "./Components/ProjectList";
import AddProjectForm from "./Components/AddProjectForm";
import Settings from "./Components/Settings";

const App = () => {
    const [projectList, setProjectList] = useState([]);

    const addProject = (newProject) => {
        setProjectList((prevProjects) => [...prevProjects, newProject]);
    };

    return (
        <div>
            <h1>Personal Project Manager</h1>
            <AddProjectForm onAddProject={addProject}/>
            <ProjectList projectList={projectList}/>
            <Settings/>
        </div>
    );
};

export default App;
