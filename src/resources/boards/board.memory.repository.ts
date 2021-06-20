import { getRepository } from 'typeorm';
import { Board } from '../../entity/board.entity';
import { Task } from '../../entity/task.entity';
import { IBoard } from './model';

const getAll = async (): Promise<IBoard[]> => getRepository(Board).find();

const getById = async (id: string): Promise<IBoard | undefined> => getRepository(Board).findOne(id);

const addBoard = async (board: Omit<IBoard, 'id'>): Promise<IBoard> => {
  const userRepository = getRepository(Board);
  const result = await userRepository.save(board);
  return result;
};

const updateBoard = async (board: IBoard): Promise<boolean> => {
  const boardRepository = getRepository(Board);
  const boardFind = await boardRepository.findOne(board.id);
  if (boardFind) await boardRepository.update(boardFind.id, board);
  return !!boardFind;
};

const deleteBoard = async (id: string): Promise<boolean> => {
  const boardRepository = getRepository(Board);
  const boardFind = await boardRepository.findOne(id);
  if (boardFind) {
    await boardRepository.delete(id);
    await getRepository(Task).delete({ boardId: id });
  }
  return !!boardFind;
};

export {
  getAll, getById, addBoard, updateBoard, deleteBoard,
};
