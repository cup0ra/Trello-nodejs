  /**
   * @typedef {Object} Task - object task
   * @property {number} id - task id
   * @property {string} title - task title
   * @property {number} order - task order
   * @property {string} description - task description
   * @property {?number} userId - task user id
   * @property {?number} boardId  - task board id
   * @property {?number} columnId - task column id
   */

let tasks = [];

/**
 * Get all tasks
 * @returns {Task[]}
 */

const getAll = async () => tasks;

/**
 * Get task.
 * @param {number} id - tast id
 * @return {Task} - return task
 */

const getById = async (id) => tasks.find((e) => e.id === id);

/**
 * Add task.
 * @param {Task} user - object task
 * @return {void} 
 */

const addTask = async (task) => {
  tasks = [...tasks, task];
};

/**
 * Update task.
 * @param {Task} user - object task
 * @return {void} 
 */

const updateTask = async ({ ...task }) => {
  tasks = tasks.map((e) => (e.id === task.id ? task : e));
};

/**
 * Delete task.
 * @param {number} id - task id
 * @return {void} 
 */


const deleteTask = async (id) => {
  tasks = tasks.filter((user) => user.id !== id);
};

/**
 * delete a task from the board
 * @param {number} id - task id
 * @return {void} 
 */

const deleteTaskOfBord = async (id) => {
  tasks = tasks.filter((task) => task.boardId !== id);
};

module.exports = { getAll, getById, addTask, updateTask, deleteTask, deleteTaskOfBord };
