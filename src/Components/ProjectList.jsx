import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

// Валидация пропсов
ProjectList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ProjectList;
