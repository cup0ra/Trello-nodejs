import { IBoard } from './model';

import * as boardRepo from './board.memory.repository';
import * as tasks from '../tasks/task.memory.repository';

const getAll = ():Promise<IBoard[]> => boardRepo.getAll();

const getById = (id: string): Promise<IBoard | undefined> => boardRepo.getById(id);

const add = (board: IBoard): Promise<void> => boardRepo.addBoard(board);

const update = (board: IBoard): Promise<void> => boardRepo.updateBoard(board);

const deleteBoard = async (id: string): Promise<void> => {
  boardRepo.deleteBoard(id);
  await tasks.deleteTaskOfBord(id);
};

export {
  getAll, getById, add, deleteBoard, update,
};
