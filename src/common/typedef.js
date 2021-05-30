/** User object
 * @typedef {Object} IUser
 * @property {number} id - id user
 * @property {string} name - name user
 * @property {string} login - login user
 * @property {string} password - password user
 */

/** User return object
 * @typedef {Object} UserReturn
 * @property {number} id - user id
 * @property {string} name - user name
 * @property {string} login - user login
 */

/**
 * Columns object
 * @typedef {Object} Column 
 * @property {number} id - column id
 * @property {string} title - title title
 * @property {string} order - board order
 */

/**
 * Board object
 * @typedef {Object} IBoard
 * @property {number} id - boar id
 * @property {string} title - board title
 * @property {Column[]} columns - board columns
 */

/**
 * Task object
 * @typedef {Object} ITask - object task
 * @property {number} id - task id
 * @property {string} title - task title
 * @property {number} order - task order
 * @property {string} description - task description
 * @property {?number} userId - task user id
 * @property {?number} boardId  - task board id
 * @property {?number} columnId - task column id
 */
