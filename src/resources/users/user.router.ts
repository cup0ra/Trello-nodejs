import { Router } from 'express';
import { BaseError } from '../../common/errorHandler';
import User from './user.model';
import * as usersService from './user.service';
import {
  OK, CREATED, NOT_FOUND, BAD_REQUEST,
} from '../../common/statusCodes';

const router = Router();

router.route('/').get(async (_req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(OK).json(users.map(User.toResponse));
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').get(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await usersService.getById(userId);
    if (!user) throw new BaseError(`User '${userId}' not found`, NOT_FOUND);
    res.status(OK).json(User.toResponse(user!));
  } catch (err) {
    next(err);
  }
});
router.route('/').post(async (req, res, next) => {
  try {
    const { name, login, password } = req.body;
    const user = new User(name, login, password);
    await usersService.addUser(user);
    res.status(CREATED).json(User.toResponse(user));
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').put(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { body } = req;
    const user = await usersService.updateUser({ ...body, id: userId });
    if (user < 0) throw new BaseError(`User '${userId}' not found`, NOT_FOUND);
    res.status(OK).json(User.toResponse({ ...body, id: userId }));
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').delete(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const isUser = await usersService.deleteUser(userId);
    if (!isUser) throw new BaseError(`User '${userId}' not found`, BAD_REQUEST);
    res.status(OK).send(OK);
  } catch (err) {
    next(err);
  }
});

export default router;
