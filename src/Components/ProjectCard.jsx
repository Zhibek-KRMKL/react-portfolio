import PropTypes from 'prop-types';

const ProjectCard = ({ project, onDelete }) => {
    return (
        <div>
            <h2>{project.name}</h2>
            <button onClick={() => onDelete(project.id)}>Delete</button>
        </div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired, // Добавляем валидацию пропсов для onDelete
};

export default ProjectCard;
