const uuid = require('uuid');

/** Class representing a board. */
class Board {
    /**
   * Columns object
   * @typedef {Object} Column
   * @property {number} id - column id
   * @property {string} title - title title
   * @property {string} order - board order
 */

  /**
   * Create Board
   * @typedef {Object} Board
   * @property {number} id - boar id
   * @property {string} title - board title
   * @property {Column[]} columns - board columns
 */
  constructor({ id = uuid.v4(), title = 'BOARD', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
