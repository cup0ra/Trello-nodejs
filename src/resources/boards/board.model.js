const uuid = require('uuid');
require('../../common/typedef')

/** Class representing a board. */
class Board {

  /**
   * Create Board object
   * @param {IBoard} param0 input parameters
 */

  constructor({ id = uuid.v4(), title = 'BOARD', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
