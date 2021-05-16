let tasks = [];

const getAll = async () => tasks;


const getById = async (id) => tasks.find(e => e.id === id) 

const addTask = async (user) => {
    tasks = [...tasks, user]
}


const updateTask = async ({...user}) => {
    tasks = tasks.map((e) => e.id === user.id ? user : e)
}

const deleteTask = async (id) => {
    tasks = tasks.filter((user) => user.id !== id)
}

const deleteTaskOfBord = async (id) => {
    tasks = tasks.filter((task) => task.boardId !== id)
}

module.exports = { getAll, getById, addTask, updateTask, deleteTask, deleteTaskOfBord };