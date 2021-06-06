import { IUser } from './model';
import * as usersRepo from './user.memory.repository';
import * as tasks from '../tasks/task.memory.repository';

const getAll = (): Promise<IUser[]> => usersRepo.getAll();

const getById = (id: string): Promise<IUser | undefined> => usersRepo.getById(id);

const addUser = (user: IUser): Promise<void> => usersRepo.addUser(user);

const updateUser = (user: IUser): Promise<void> => usersRepo.updateUser(user);

const deleteUser = async (id: string): Promise<void> => {
  usersRepo.deleteUser(id);
  const task = await tasks.getAll();
  task.forEach((e) => {
    if (e.userId === id) {
      e.userId = null;
    }
  });
};

export {
  getAll, getById, addUser, deleteUser, updateUser,
};
