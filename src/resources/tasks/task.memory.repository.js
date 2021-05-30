require('../../common/typedef');

let tasks = [];

/**
 * Get all tasks
 * @returns {Promise<ITask[]>} promise array tasks
 */

const getAll = async () => tasks;

/**
 * Get task.
 * @param {number} id - tast id
 * @return {Promise<ITask>} - promise task
 */

const getById = async (id) => tasks.find((e) => e.id === id);

/**
 * Add task.
 * @param {ITask} task - object task
 * @return {Promise<void>} promise
 */

const addTask = async (task) => {
  tasks = [...tasks, task];
};

/**
 * Update task.
 * @param {ITask} task - object task
 * @return {Promise<void>} promise
 */

const updateTask = async ({ ...task }) => {
  tasks = tasks.map((e) => (e.id === task.id ? task : e));
};

/**
 * Delete task.
 * @param {number} id - task id
 * @return {Promise<void>} promise
 */

const deleteTask = async (id) => {
  tasks = tasks.filter((user) => user.id !== id);
};

/**
 * delete a task from the board
 * @param {number} id - task id
 * @return {Promise<void>} promise
 */

const deleteTaskOfBord = async (id) => {
  tasks = tasks.filter((task) => task.boardId !== id);
};

module.exports = { getAll, getById, addTask, updateTask, deleteTask, deleteTaskOfBord };
