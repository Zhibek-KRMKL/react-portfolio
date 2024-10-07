import { useState, useEffect } from "react";
import ProjectList from "./Components/ProjectList";
import AddProjectForm from "./Components/AddProjectForm";
import Settings from "./Components/Settings";

const App = () => {
    const [projectList, setProjectList] = useState([]);

    // Загружаем проекты из LocalStorage при первой загрузке компонента
    useEffect(() => {
        const storedProjects = localStorage.getItem('projectList');
        if (storedProjects) {
            try {
                setProjectList(JSON.parse(storedProjects)); // Преобразуем только если данные валидны
        } catch (error) {
            console.error('Ошибка при загрузке данных из LocalStorage:', error);
            }
        }
    }, []);

    // Сохраняем проект в LocalStorage при изменении projectList
    useEffect(() => {
        console.log('Сохроняем в ЛокалСторадж: ', projectList);
        if (projectList.length > 0) {
            localStorage.setItem('projectList', JSON.stringify(projectList));
        }
    }, [projectList]);

    const addProject = (newProject) => {
        setProjectList((prevProjectList) => [...prevProjectList, newProject]);
    };

    const updateProject = (projectId, updatedName) => {
        setProjectList((prevProjectList) =>
            prevProjectList.map((project) =>
                project.id === projectId ? { ...project, name: updatedName } : project
            )
        );
    };
    

    const deleteProject = (projectId) => {
        setProjectList((prevProjectList) =>
            prevProjectList.filter((project) => project.id !== projectId)
        );
    };

    return (
        <div>
            <h1>Personal Project Manager</h1>
            <AddProjectForm onAddProject={addProject} />
            <ProjectList 
            projectList={projectList} 
            onUpdate={updateProject}
            onDelete={deleteProject} />
            <Settings />
        </div>
    );
};

export default App;
