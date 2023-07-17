import { types, Instance } from 'mobx-state-tree';

export const Task = types
  .model('Task', {
    id: types.identifier,
    title: types.string,
    description: types.string,
    status: types.enumeration(['To Do', 'In Progress', 'Completed']),
  })
  .actions((self) => ({
    setTitle(title: string) {
      self.title = title;
    },
    setDescription(description: string) {
      self.description = description;
    },
    setStatus(status: 'To Do' | 'In Progress' | 'Completed') {
      self.status = status;
    },
  }));

export const TaskStore = types
  .model('TaskStore', {
    tasks: types.array(Task),
  })
  .views((self) => ({
    getTask(taskId: string) {
      return self.tasks.find((task) => task.id === taskId);
    },
  }))
  .actions((self) => ({
    addTask(task: Instance<typeof Task>) {
      self.tasks.push(task);
    },
    updateTask(taskId: string, updatedTask: Instance<typeof Task>) {
      const taskIndex = self.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        self.tasks[taskIndex] = updatedTask;
      }
    },
    deleteTask(taskId: string) {
      const taskIndex = self.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        self.tasks.splice(taskIndex, 1);
      }
    },
  }));

export type ITaskStore = Instance<typeof TaskStore>;

// Create a new instance of TaskStore
export const createTaskStore = () =>
  TaskStore.create({
    tasks: [],
  });
