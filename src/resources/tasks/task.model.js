const uuid = require('uuid');
require('../../common/typedef');

/** Class representing a task. */
class Task {
  /**
   * Create task object
   * @param {ITask} param0 input parameters
   */

  constructor({
    id = uuid.v4(),
    title = 'TITLE',
    order = 0,
    description = 'DESCRIPTION',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
