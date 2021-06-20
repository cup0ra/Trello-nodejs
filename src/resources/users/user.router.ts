import { Router } from 'express';
import { BaseError } from '../../common/errorHandler';
import * as usersService from './user.service';
import {
  OK, CREATED, NOT_FOUND, BAD_REQUEST,
} from '../../common/statusCodes';

const router = Router();

router.route('/').get(async (_req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.status(OK).json(users);
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').get(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await usersService.getById(userId);
    if (!user) throw new BaseError(`User '${userId}' not found`, NOT_FOUND);
    res.status(OK).json(user);
  } catch (err) {
    next(err);
  }
});
router.route('/').post(async (req, res, next) => {
  try {
    const { name, login, password } = req.body;
    const user = await usersService.addUser({ name, login, password });
    res.status(CREATED).json(user);
  } catch (err) {
    next(err);
  }
});

router.route('/:userId').put(async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { body } = req;
    const user = await usersService.updateUser({ ...body, id: userId });
    console.log(user);

    if (!user) throw new BaseError(`User '${userId}' not found`, NOT_FOUND);
    res.status(OK).json(OK);
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
