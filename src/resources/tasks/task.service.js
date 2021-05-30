const taskRepo = require('./task.memory.repository');
require('../../common/typedef');

/**
 * Get all tasks
 * @returns {Promise<ITask[]>} promise array tasks
 */

const getAll = () => taskRepo.getAll();

/**
 * Get task.
 * @param {number} id - tast id
 * @return {Promise<ITask>} - promise task
 */

const getById = (id) => taskRepo.getById(id);

/**
 * Add task.
 * @param {ITask} task - object task
 * @return {Promise<void>} promise
 */

const addTask = (task) => taskRepo.addTask(task);

/**
 * Update task.
 * @param {ITask} task - object task
 * @return {Promise<void>} promise
 */

const updateTask = (task) => taskRepo.updateTask(task);

/**
 * Delete task.
 * @param {number} id - task id
 * @return {Promise<void>} promise
 */

const deleteTask = (task) => taskRepo.deleteTask(task);

module.exports = { getAll, getById, addTask, updateTask, deleteTask };
