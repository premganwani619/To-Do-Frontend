import axios from 'axios';

const API_URL = 'https://to-do-backend-6gcm.onrender.com/todos';

export const getToDos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createToDo = async (todo) => {
    const response = await axios.post(API_URL, todo);
    return response.data;
};

export const deleteToDo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateToDo = async (id, description, completed) => {
    await axios.put(`${API_URL}/${id}?description=${description}&completed=${completed}`);
};
