import React from 'react';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import { Task } from '../store/TaskStore';
import { useTaskStore } from '../store';

const TaskPage: React.FC = observer(() => {
  const router = useRouter();
  const { taskId } = router.query;
  const taskStore = useTaskStore();

  const task = taskStore.getTask(taskId as string);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
});

export default TaskPage;
