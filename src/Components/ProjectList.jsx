import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

const ProjectList = ({ projectList }) => {
  return (
    <div>
        {projectList.map((project) => {
            <ProjectCard key={project.id} project={project} />
        })}
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
};

export default ProjectList