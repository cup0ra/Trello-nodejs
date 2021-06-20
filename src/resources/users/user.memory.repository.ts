import { getRepository } from 'typeorm';
import { IUser, UserReturn } from './model';
import { User } from '../../entity/user.entity';

const getAll = async (): Promise<IUser[]> => getRepository(User).find();

const getById = async (id: string): Promise<IUser | undefined> => getRepository(User).findOne(id);

const addUser = async (user: IUser): Promise<UserReturn> => {
  const userRepository = getRepository(User);
  const result = await userRepository.save(user);
  return User.toResponse(result);
};

const updateUser = async (user: IUser): Promise<boolean> => {
  const userRepository = getRepository(User);
  const userFind = await userRepository.findOne(user.id);
  if (userFind) await userRepository.update(userFind.id, user);
  return Boolean(userFind);
};

const deleteUser = async (id: string): Promise<boolean> => {
  const userRepository = getRepository(User);
  const userFind = await userRepository.findOne(id);
  if (userFind) await userRepository.delete(id);
  return Boolean(userFind);
};

export {
  getAll, getById, addUser, deleteUser, updateUser,
};
