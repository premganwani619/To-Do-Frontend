import React, { useState } from 'react';
import '../App.css';

const ToDoItem = ({ todo, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(todo.description);
    const [newCompleted, setNewCompleted] = useState(todo.completed);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(todo.id, newDescription, newCompleted);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setNewDescription(todo.description);
        setNewCompleted(todo.completed);
    };

    const handleCheckboxChange = () => {
        setNewCompleted(!newCompleted);
    };

    return (
        <li className={`todo-item ${isEditing ? 'editing' : ''}`}>
            {isEditing ? (
                <>
                    <input 
                        type="text" 
                        value={newDescription} 
                        onChange={(e) => setNewDescription(e.target.value)} 
                        className="edit-input"
                    />
                    <input 
                        type="checkbox" 
                        checked={newCompleted} 
                        onChange={handleCheckboxChange} 
                    />
                    <button onClick={handleSave} className="save-button">Save</button>
                    <button onClick={handleCancel} className="cancel-button">Cancel</button>
                </>
            ) : (
                <>
                    <span>{todo.description}</span>
                    <button onClick={handleEdit} className="edit-button">Edit</button>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={handleCheckboxChange} 
                        disabled={!isEditing} 
                    />
            {/* <span>{todo.completed ? 'Completed' : 'Pending'}</span> */}
            <button onClick={() => onDelete(todo.id)}>Delete</button>
                </>
            )}
        </li>
    );
};

export default ToDoItem;
