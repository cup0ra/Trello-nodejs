const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const getById = (id) => boardRepo.getById(id);

const add = (board) => boardRepo.addBoard(board);

const update = (board) => boardRepo.updateBoard(board)

const deleteBoard = (board) => boardRepo.deleteBoard(board);


module.exports = { getAll, getById, add, deleteBoard, update };