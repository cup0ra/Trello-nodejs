require('../../common/typedef');

const uuid = require('uuid');

/** Class representing a user. */
class User {
  /**
   * Create user
   * @param {IUser} param0 input parameters
   */

  constructor({ id = uuid.v4(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /** remove the password from the object
   * @param {IUser} user object user
   * @returns {UserReturn} A UserReturn object
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
