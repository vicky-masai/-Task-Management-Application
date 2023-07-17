import React, { useState } from 'react';
import { useTaskStore } from '../store';

const TaskForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const taskStore = useTaskStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    taskStore.addTask({ title, description, status: 'To Do' });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      ></textarea>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
