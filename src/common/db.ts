import { IBoard } from '../resources/boards/model';
import { ITask } from '../resources/tasks/model';
import { IUser } from '../resources/users/model';

type Db = {
  users: IUser[],
  boards: IBoard[],
  tasks: ITask[]
};

export const db: Db = {
  users: [],
  boards: [],
  tasks: [],
};
