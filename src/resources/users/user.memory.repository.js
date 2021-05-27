const tasks = require('../tasks/task.memory.repository');
/**
* Object user
 * @typedef {Object} User
 * @property {number} id - id user 
 * @property {string} name - name user 
 * @property {string} login - login user
 * @property {string} password - password user
 */

let users = [];

/**
 * Get all users.
 * @return {User[]} return array users
 */

const getAll = async () => users;

/**
 * Get user.
 * @param {number} id - user id
 * @return {User} - return user
 */

const getById = async (id) => users.find((e) => e.id === id);

/**
 * Add user.
 * @param {User} user - object user
 * @return {void} 
 */

const addUser = async (user) => {
  users = [...users, user];
};

/**
 * Update user.
 * @param {User} user - object user
 * @return {void} 
 */

const updateUser = async ({ ...user }) => {
  users = users.map((e) => (e.id === user.id ? user : e));
};

/**
 * Delete user.
 * @param {number} id - user id
 * @return {void} 
 */


const deleteUser = async (id) => {
  users = users.filter((user) => user.id !== id);
  (await tasks.getAll()).forEach((e) => {
    if (e.userId === id) {
      e.userId = null;
    }
  });
};

module.exports = { getAll, getById, addUser, deleteUser, updateUser };
