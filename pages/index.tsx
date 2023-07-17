import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Task Management Application</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default HomePage;
