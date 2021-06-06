import { Router } from 'express';
import User from './user.model';
import * as usersService from './user.service';

const router = Router();

router.route('/').get(async (_req, res) => {
  const users = await usersService.getAll();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await usersService.getById(userId);
    res.status(200).json(User.toResponse(user!));
  } catch (err) {
    res.status(404).send(404);
  }
});
router.route('/').post(async (req, res) => {
  try {
    const { name, login, password } = req.body;
    const user = new User(name, login, password);
    await usersService.addUser(user);
    res.status(201).json(User.toResponse(user));
  } catch (err) {
    res.status(404).send(404);
  }
});

router.route('/:userId').put(async (req, res) => {
  try {
    const { userId } = req.params;
    const { body } = req;
    await usersService.updateUser({ ...body, id: userId });
    res.status(200).json(User.toResponse({ ...body, id: userId }));
  } catch (err) {
    res.status(404).send(404);
  }
});

router.route('/:userId').delete(async (req, res) => {
  try {
    await usersService.deleteUser(req.params.userId);
    res.status(200).send(200);
  } catch (err) {
    res.status(404).send(404);
  }
});

export default router;
