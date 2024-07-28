import React, { useState } from 'react';
import { createToDo } from '../services/todoService';
import '../App.css';

const CreateToDo = ({ onCreate }) => {
    const [description, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (description.trim()) {
            await createToDo({ description, completed: false });
            onCreate();
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-todo-form">
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Type your todo here..." 
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default CreateToDo;
