import React from 'react';
import { observer } from 'mobx-react-lite';
import TaskItem from './TaskItem';
import { useTaskStore } from '../store';

const TaskList: React.FC = observer(() => {
  const taskStore = useTaskStore();

  return (
    <div>
      {taskStore.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
});

export default TaskList;
