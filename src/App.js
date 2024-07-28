import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import CreateToDo from './components/CreateToDo';
import LoadingModal from './components/LoadingModal';
import './App.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleCreate = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="app-container">
      <LoadingModal />
      <div className="todo-list">
        <h1>ToDo List</h1>
        <CreateToDo onCreate={handleCreate} />
        <ToDoList key={refresh} />
      </div>
    </div>
  );
};

export default App;
