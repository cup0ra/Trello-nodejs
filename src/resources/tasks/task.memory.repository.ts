import { ITask } from './model';

let tasks: ITask[] = [];

const getAll = async (): Promise<ITask[]> => tasks;

const getById = async (id: string): Promise<ITask | undefined> => tasks.find((e) => e.id === id);

const addTask = async (task: ITask): Promise<void> => {
  tasks = [...tasks, task];
};

const updateTask = async (task: ITask): Promise<number> => {
  const indexTask = tasks.findIndex((e) => e.id === task.id);
  if (indexTask >= 0) tasks[indexTask] = { ...tasks[indexTask], ...task };
  return indexTask;
};

const deleteTask = async (id: string): Promise<boolean> => {
  const isTask = tasks.some((e) => e.id === id);
  if (isTask) tasks = tasks.filter((task) => task.id !== id);
  return isTask;
};

const deleteTaskOfBord = async (id: string): Promise<void> => {
  tasks = tasks.filter((task) => task.boardId !== id);
};

export {
  getAll, getById, addTask, updateTask, deleteTask, deleteTaskOfBord,
};
