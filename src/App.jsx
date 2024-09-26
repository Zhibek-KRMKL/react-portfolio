import React from "react";
import ProjectList from "./Components/ProjectList";
import AddProjectList from "./Components/AddProjectForm";
import Settings from "./Components/Settings";

function App() {
  return (
    <div>
      <h1>Personal Project Manager</h1>
      <AddProjectList />
      <ProjectList />
      <Settings />
    </div>
  );
}

export default App;
