const uuid = require('uuid');

/** Class representing a user. */
class User {
  /**
* Create user
 * @typedef {Object} User
 * @property {number} id - id user 
 * @property {string} name - name user 
 * @property {string} login - login user
 * @property {string} password - password user
 */
  constructor({ id = uuid.v4(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
 * @typedef {Object} UserReturn
 * @property {number} id - user id
 * @property {string} name - user name
 * @property {string} login - user login
 */
/** remove the password from the object
 * @param {User} user object user
 * @returns {UserReturn} A UserReturn object
 */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
