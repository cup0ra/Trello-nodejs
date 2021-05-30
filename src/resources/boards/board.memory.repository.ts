import { IBoard } from './model';

let boards: IBoard[] = [];

const getAll = async (): Promise<IBoard[]> => boards;

const getById = async (id: string): Promise<IBoard | undefined> => boards.find((e) => e.id === id);

const addBoard = async (board: IBoard): Promise<void> => {
  boards = [...boards, board];
};

const updateBoard = async (board: IBoard): Promise<void> => {
  boards = boards.map((e) => (e.id === board.id ? { ...e, ...board } : e));
};

const deleteBoard = async (id: string): Promise<void> => {
  boards = boards.filter((user) => user.id !== id);
};

export {
  getAll, getById, addBoard, updateBoard, deleteBoard,
};
