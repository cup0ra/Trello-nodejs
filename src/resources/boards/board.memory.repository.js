const tasks = require('../tasks/task.memory.repository');

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

let boards = [];

/**
 * Get all boards
 * @returns {Board[]} return  array boards
 */

const getAll = async () => boards;

/**
 * Get board by id
 * @param {number} id board id
 * @returns {Board} return board
 */

const getById = async (id) => boards.find((e) => e.id === id);

/**
 * Add board
 * @param {Board} board - object board
 * @returns {void}
 */

const addBoard = async (board) => {
  boards = [...boards, board];
};

/**
 * Update boards
 * @param {Board} board - object board
 * @returns {void}  
 */

const updateBoard = async ({ ...board }) => {
  boards = boards.map((e) => (e.id === board.id ? board : e));
};

/**
 * Delete board
 * @param {number} id - board id 
 * @returns {void}
 */

const deleteBoard = async (id) => {
  boards = boards.filter((user) => user.id !== id);
  await tasks.deleteTaskOfBord(id);
};

module.exports = { getAll, getById, addBoard, updateBoard, deleteBoard };
