import { IUser, UserReturn } from './model';
import * as usersRepo from './user.memory.repository';
import * as tasks from '../tasks/task.memory.repository';

const getAll = (): Promise<IUser[]> => usersRepo.getAll();

const getById = (id: string): Promise<IUser | undefined> => usersRepo.getById(id);

const addUser = (user: IUser): Promise<UserReturn> => usersRepo.addUser(user);

const updateUser = (user: IUser): Promise<boolean> => usersRepo.updateUser(user);

const deleteUser = async (id: string): Promise<boolean> => {
  const isUser = await usersRepo.deleteUser(id);
  if (isUser) {
    const task = await tasks.getAll();
    task.forEach((e) => {
      if (e.userId === id) {
        e.userId = null;
      }
    });
  }
  return isUser;
};

export {
  getAll, getById, addUser, deleteUser, updateUser,
};
