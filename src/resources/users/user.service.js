const usersRepo = require('./user.memory.repository');
require('../../common/typedef');

/**
 * Get all users.
 * @return {Promise<IUser[]>} promise array users
 */

const getAll = () => usersRepo.getAll();

/**
 * Get user.
 * @param {number} id - user id
 * @return {Promise<IUser>} - promise user
 */

const getById = (id) => usersRepo.getById(id);

/**
 * Add user.
 * @param {IUser} user - object user
 * @return {Promise<void>} promise
 */

const addUser = (user) => usersRepo.addUser(user);

/**
 * Update user.
 * @param {IUser} user - object user
 * @return {Promise<void>} promise
 */

const updateUser = (user) => usersRepo.updateUser(user);

/**
 * Delete user and all user tasks.
 * @param {number} id - user id
 * @return {Promise<void>} promise
 */

const deleteUser = (user) => usersRepo.deleteUser(user);

module.exports = { getAll, getById, addUser, deleteUser, updateUser };
