import { v4 as uuidv4 } from 'uuid';
import { IBoard } from './model';

export default class Board implements IBoard {
  constructor(public title = 'BOARD', public columns = [], public id = uuidv4()) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}
