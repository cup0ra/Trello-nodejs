import { db } from '../../common/db';
import { IBoard } from './model';

let { boards } = db;

const getAll = async (): Promise<IBoard[]> => boards;

const getById = async (id: string): Promise<IBoard | undefined> => boards.find((e) => e.id === id);

const addBoard = async (board: IBoard): Promise<void> => {
  boards = [...boards, board];
};

const updateBoard = async (board: IBoard): Promise<number> => {
  const indexUser = boards.findIndex((e) => e.id === board.id);
  if (indexUser >= 0) boards[indexUser] = { ...boards[indexUser], ...board };
  return indexUser;
};

const deleteBoard = async (id: string): Promise<boolean> => {
  const isUser = boards.some((e) => e.id === id);
  if (isUser) boards = boards.filter((board) => board.id !== id);
  return isUser;
};

export {
  getAll, getById, addBoard, updateBoard, deleteBoard,
};
