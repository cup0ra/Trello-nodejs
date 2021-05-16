const uuid = require('uuid');

class Board {
  constructor({ id = uuid.v4(), title = 'BOARD', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { title, columns } = board;
    return { title, columns };
  }
}

module.exports = Board;
