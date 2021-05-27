const tasks = require('../tasks/task.memory.repository');

let boards = [];

const getAll = async () => boards;

const getById = async (id) => boards.find((e) => e.id === id);

const addBoard = async (user) => {
  boards = [...boards, user];
};

const updateBoard = async ({ ...user }) => {
  boards = boards.map((e) => (e.id === user.id ? user : e));
};

const deleteBoard = async (id) => {
  boards = boards.filter((user) => user.id !== id);
  await tasks.deleteTaskOfBord(id);
};

module.exports = { getAll, getById, addBoard, updateBoard, deleteBoard };
