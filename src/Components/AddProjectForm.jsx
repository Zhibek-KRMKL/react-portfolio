import { useState } from "react";
import PropTypes from 'prop-types';

const AddProjectForm = ({ onAddProject }) => {
  const [projectName, setProjectName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName) {
        onAddProject({ name: projectName, id: Date.now() });
        setProjectName("");
    }
};
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e)=> setProjectName(e.target.value)}
                />
            <button type="submit">Add Project</button>
        </form>
    </div>
)
};


//Валидация пропсов
AddProjectForm.propTypes = {
    onAddProject: PropTypes.func.isRequired,
};
export default AddProjectForm;