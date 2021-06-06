import { ITask } from './model';

let tasks: ITask[] = [];

const getAll = async (): Promise<ITask[]> => tasks;

const getById = async (id: string): Promise<ITask | undefined> => tasks.find((e) => e.id === id);

const addTask = async (task: ITask): Promise<void> => {
  tasks = [...tasks, task];
};

const updateTask = async (task: ITask): Promise<void> => {
  tasks = tasks.map((e) => (e.id === task.id ? { ...e, ...task } : e));
};

const deleteTask = async (id: string): Promise<void> => {
  tasks = tasks.filter((user) => user.id !== id);
};

const deleteTaskOfBord = async (id: string): Promise<void> => {
  tasks = tasks.filter((task) => task.boardId !== id);
};

export {
  getAll, getById, addTask, updateTask, deleteTask, deleteTaskOfBord,
};
