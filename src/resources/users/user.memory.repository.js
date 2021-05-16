
let users = []

const getAll = async () => users;

const getById = async (id) => users.find(e => e.id === id) 

const addUser = async (user) => {
     users = [...users, user]
}


const updateUser = async ({...user}) => {
 users = users.map((e) => e.id === user.id ? user : e)
}

const deleteUser = async (id) => {
   users = users.filter((user) => user.id !== id)
}

module.exports = { getAll, getById, addUser, deleteUser, updateUser };


