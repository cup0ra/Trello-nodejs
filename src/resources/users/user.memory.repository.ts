import { IUser } from './model';

let users: IUser[] = [];

const getAll = async (): Promise<IUser[]> => users;

const getById = async (id: string): Promise<IUser | undefined> => users.find((e) => e.id === id);

const addUser = async (user: IUser): Promise<void> => {
  users = [...users, user];
};

const updateUser = async (user: IUser): Promise<number> => {
  const indexUser = users.findIndex((e) => e.id === user.id);
  if (indexUser >= 0)users[indexUser] = { ...users[indexUser], ...user };
  return indexUser;
};

const deleteUser = async (id: string): Promise<boolean> => {
  const isUser = users.some((e) => e.id === id);
  if (isUser) users = users.filter((user) => user.id !== id);
  return isUser;
};

export {
  getAll, getById, addUser, deleteUser, updateUser,
};
