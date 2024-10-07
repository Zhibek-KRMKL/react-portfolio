import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projectList, onUpdate, onDelete }) => {
    return (
        <div>
            {projectList.map((project) => (
                <ProjectCard
                    key={project.id}
                    project={project}
                    onUpdate={onUpdate}  // Передаем функцию обновления
                    onDelete={onDelete}  // Передаем функцию удаления
                />
            ))}
        </div>
    );
};

// Валидация пропсов
ProjectList.propTypes = {
    projectList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    onUpdate: PropTypes.func.isRequired,  // Функция обновления
    onDelete: PropTypes.func.isRequired,  // Функция удаления
};

export default ProjectList;
