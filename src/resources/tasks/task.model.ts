import { v4 as uuidv4 } from 'uuid';
import { ITask } from './model';

export class Task implements ITask {
  constructor(
    public title: string,
    public order: number,
    public description: string,
    public boardId: string,
    public columnId = null,
    public userId = null,
    public id = uuidv4(),
  ) {
    this.id = id;
    this.title = title ?? 'TITLE';
    this.order = order ?? 0;
    this.description = description ?? 'DESCRIPTION';
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}
