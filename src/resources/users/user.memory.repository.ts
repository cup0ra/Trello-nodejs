import { IUser } from './model';

let users: IUser[] = [];

const getAll = async (): Promise<IUser[]> => users;

const getById = async (id: string): Promise<IUser | undefined> => users.find((e) => e.id === id);

const addUser = async (user: IUser): Promise<void> => {
  users = [...users, user];
};

const updateUser = async (user: IUser): Promise<void> => {
  users = users.map((e) => (e.id === user.id ? { ...e, ...user } : e));
};

const deleteUser = async (id: string): Promise<void> => {
  users = users.filter((user) => user.id !== id);
};

export {
  getAll, getById, addUser, deleteUser, updateUser,
};
