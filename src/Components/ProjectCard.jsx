import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <h2>{project.name}</h2>
        </div>
    );
};

// Валидация пропсов
ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired, 
};

export default ProjectCard;
