const boardRepo = require('./board.memory.repository');
require('../../common/typedef');

/**
 * Get all boards
 * @returns {Promise<IBoard[]>} promise array boards
 */

const getAll = () => boardRepo.getAll();

/**
 * Get board by id
 * @param {number} id board id
 * @returns {Promise<IBoard>} promise board
 */

const getById = (id) => boardRepo.getById(id);

/**
 * Add board
 * @param {IBoard} board - object board
 * @returns {Promise<void>} promise
 */

const add = (board) => boardRepo.addBoard(board);

/**
 * Update board
 * @param {IBoard} board - object board
 * @returns {Promise<void>}  promise
 */

const update = (board) => boardRepo.updateBoard(board);

/**
 * Delete the board and all tasks of the board
 * @param {number} id - board id 
 * @returns {Promise<void>} promise
 */

const deleteBoard = (board) => boardRepo.deleteBoard(board);

module.exports = { getAll, getById, add, deleteBoard, update };
