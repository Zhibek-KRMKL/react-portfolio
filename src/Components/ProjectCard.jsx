import { useState } from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(project.name);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(project.id, newName);  // Обновляем проект
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(project.id);  // Удаляем проект
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <h2>{project.name}</h2>
                    <button onClick={handleEdit}>Edit</button>
                    <button onClick={handleDelete}>Delete</button> {/* Добавляем кнопку удаления */}
                </div>
            )}
        </div>
    );
};

// Валидация пропсов
ProjectCard.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,  // Функция обновления проекта
    onDelete: PropTypes.func.isRequired,  // Функция удаления проекта
};

export default ProjectCard;
