import { ITask } from './model';

import * as taskRepo from './task.memory.repository';

const getAll = (): Promise<ITask[]> => taskRepo.getAll();

const getById = (id: string): Promise<ITask | undefined> => taskRepo.getById(id);

const addTask = (task: ITask): Promise<ITask> => taskRepo.addTask(task);

const updateTask = (task: ITask): Promise<boolean> => taskRepo.updateTask(task);

const deleteTask = (id: string): Promise<boolean> => taskRepo.deleteTask(id);

export {
  getAll, getById, addTask, updateTask, deleteTask,
};
