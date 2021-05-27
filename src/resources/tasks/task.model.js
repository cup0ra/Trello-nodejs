const uuid = require('uuid');
/** Class representing a task. */
class Task {

  /**
   * @typedef {Object} Task - object task
   * @property {number} id - task id
   * @property {string} title - task title
   * @property {number} order - task order
   * @property {string} description - task description
   * @property {?number} userId - task user id
   * @property {?number} boardId  - task board id
   * @property {?number} columnId - task column id
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
