import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projectList, onDelete }) => {
    return (
        <div>
            {projectList.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onDelete={onDelete} // Передаем функцию удаления
                />
            ))}
        </div>
    );
};

ProjectList.propTypes = {
    projectList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired, // Валидация onDelete
};

export default ProjectList;
