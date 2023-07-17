import { createTaskStore } from './TaskStore';

const taskStore = createTaskStore();

export const useTaskStore = () => taskStore;
