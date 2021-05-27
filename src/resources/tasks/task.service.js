const taskRepo = require('./task.memory.repository');

const getAll = () => taskRepo.getAll();

const getById = (id) => taskRepo.getById(id);

const addTask = (task) => taskRepo.addTask(task);

const updateTask = (task) => taskRepo.updateTask(task);

const deleteTask = (task) => taskRepo.deleteTask(task);

module.exports = { getAll, getById, addTask, updateTask, deleteTask };
