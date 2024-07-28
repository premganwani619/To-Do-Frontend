import React, { useState, useEffect } from 'react';
import { getToDos, deleteToDo, updateToDo } from '../services/todoService';
import ToDoItem from './ToDoItem';
import '../App.css';

const ToDoList = () => {
    const [toDos, setToDos] = useState([]);

    useEffect(() => {
        fetchToDos();
    }, []);

    const fetchToDos = async () => {
        try {
            const data = await getToDos();
            setToDos(data);
        } catch (error) {
            console.error('Error fetching ToDos:', error);
        }
    };

    const handleUpdate = async (id, description, completed) => {
        try {
            await updateToDo(id, description, completed);
            fetchToDos();
        } catch (error) {
            console.error('Error updating ToDo:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteToDo(id);
            fetchToDos();
        } catch (error) {
            console.error('Error deleting ToDo:', error);
        }
    };

    return (
        <div className="todo-list">
            <ul>
                {toDos.map(todo => (
                    <ToDoItem 
                        key={todo.id} 
                        todo={todo} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;

