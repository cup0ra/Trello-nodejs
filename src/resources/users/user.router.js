const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.use((req, res, next) => {
  // do logging
  console.log('LOGGER',req.body);
  next(); // make sure we go to the next routes and don't stop here
});

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;
  const user = await usersService.getById(userId);
 try { 
    res.status(200).json(User.toResponse(user));
  }
  catch(err){
    res.status(404).send(404)
  }
});
router.route('/').post(async (req, res) => {
  const user = new User(req.body)
   await usersService.addUser({...user});
   try { 
    res.status(201).json(User.toResponse(user));
  }
  catch(err){
    res.status(404).send(404)
  }
});

router.route('/:userId').put(async (req, res) => {
  const { userId } = req.params;
     const { body } = req;
   await usersService.updateUser({...body, id: userId});
   try { 
    res.status(200).json(User.toResponse({...body, id: userId}));
  }
  catch(err){
    res.status(404).send(404)
  }
});

router.route('/:userId').delete(async (req, res) => {
await usersService.deleteUser(req.params.userId)
 try { 
  res.status(200).send(200);
}
catch(err){
  res.status(404).send(404)
}
});

module.exports = router;
