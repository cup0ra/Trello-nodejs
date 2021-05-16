const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
 try { 
    const { userId } = req.params;
    const user = await usersService.getById(userId);
    res.status(200).json(User.toResponse(user));
  }
  catch(err){
    res.status(404).send(404)
  }
});
router.route('/').post(async (req, res) => {
  try {
    const user = new User(req.body)
    await usersService.addUser({...user}); 
    res.status(201).json(User.toResponse(user));
  }
  catch(err){
    res.status(404).send(404)
  }
});

router.route('/:userId').put(async (req, res) => {
   try { 
    const { userId } = req.params;
    const { body } = req;
    await usersService.updateUser({...body, id: userId});
    res.status(200).json(User.toResponse({...body, id: userId}));
  }
  catch(err){
    res.status(404).send(404)
  }
});

router.route('/:userId').delete(async (req, res) => {
 try { 
  await usersService.deleteUser(req.params.userId)
  res.status(200).send(200);
}
catch(err){
  res.status(404).send(404)
}
});

module.exports = router;
