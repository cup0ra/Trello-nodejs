import { getRepository } from 'typeorm';
import { db } from '../../common/db';
import { Task } from '../../entity/task.entity';
import { ITask } from './model';

let { tasks } = db;

const getAll = async (): Promise<ITask[]> => getRepository(Task).find();

const getById = async (id: string): Promise<ITask | undefined> => {
  const userRepository = getRepository(Task);
  const board = await userRepository.findOne(id);
  return board;
};
const addTask = async (task: ITask): Promise<ITask> => {
  const userRepository = getRepository(Task);
  const result = await userRepository.save({ ...task, ...new Task() });
  return result;
};

const updateTask = async (task: ITask): Promise<boolean> => {
  const taskRepository = getRepository(Task);
  const taskFind = await taskRepository.findOne(task.id);
  if (taskFind) await taskRepository.update(taskFind.id, { ...task, ...new Task() });
  return Boolean(taskFind);
};

const deleteTask = async (id: string): Promise<boolean> => {
  const taskRepository = getRepository(Task);
  const taskFind = await taskRepository.findOne(id);
  if (taskFind) await taskRepository.delete(id);
  return Boolean(taskFind);
};

const deleteTaskOfBord = async (id: string): Promise<void> => {
  tasks = tasks.filter((task) => task.boardId !== id);
};

export {
  getAll, getById, addTask, updateTask, deleteTask, deleteTaskOfBord,
};
