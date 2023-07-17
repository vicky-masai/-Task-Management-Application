import React from 'react';
import { observer } from 'mobx-react-lite';
import { Task } from '../store/TaskStore';
import { useTaskStore } from '../store';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = observer(({ task }) => {
  const taskStore = useTaskStore();

  const handleDelete = () => {
    taskStore.deleteTask(task.id);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
});

export default TaskItem;
