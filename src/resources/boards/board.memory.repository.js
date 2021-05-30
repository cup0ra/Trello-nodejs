const tasks = require('../tasks/task.memory.repository');
require('../../common/typedef')

let boards = [];

/**
 * Get all boards
 * @returns {Promise<IBoard[]>} promise array boards
 */

const getAll = async () => boards;

/**
 * Get board by id
 * @param {number} id board id
 * @returns {Promise<IBoard>} promise board
 */

const getById = async (id) => boards.find((e) => e.id === id);

/**
 * Add board
 * @param {IBoard} board - object board
 * @returns {Promise<void>} promise
 */

const addBoard = async (board) => {
  boards = [...boards, board];
};

/**
 * Update board
 * @param {IBoard} board - object board
 * @returns {Promise<void>}  promise
 */

const updateBoard = async ({ ...board }) => {
  boards = boards.map((e) => (e.id === board.id ? board : e));
};

/**
 * Delete the board and all tasks of the board
 * @param {number} id - board id 
 * @returns {Promise<void>} promise
 */

const deleteBoard = async (id) => {
  boards = boards.filter((user) => user.id !== id);
  await tasks.deleteTaskOfBord(id);
};

module.exports = { getAll, getById, addBoard, updateBoard, deleteBoard };
