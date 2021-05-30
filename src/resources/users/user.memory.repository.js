const tasks = require('../tasks/task.memory.repository');
require('../../common/typedef');

let users = [];

/**
 * Get all users.
 * @return {Promise<IUser[]>} promise array users
 */

const getAll = async () => users;

/**
 * Get user.
 * @param {number} id - user id
 * @return {Promise<IUser>} - promise user
 */

const getById = async (id) => users.find((e) => e.id === id);

/**
 * Add user.
 * @param {IUser} user - object user
 * @return {Promise<void>} promise
 */

const addUser = async (user) => {
  users = [...users, user];
};

/**
 * Update user.
 * @param {IUser} user - object user
 * @return {Promise<void>} promise
 */

const updateUser = async ({ ...user }) => {
  users = users.map((e) => (e.id === user.id ? user : e));
};

/**
 * Delete user and all user tasks.
 * @param {number} id - user id
 * @return {Promise<void>} promise
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
