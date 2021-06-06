import { Router, Request } from 'express';
import {
  OK, CREATED, BAD_REQUEST, NOT_FOUND,
} from '../../common/statusCodes';
import { BaseError } from '../../common/errorHandler';
import { Task } from './task.model';
import * as taskService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res, next) => {
  try {
    const tasks = await taskService.getAll();
    res.status(OK).json(tasks);
  } catch (err) {
    next(err);
  }
});

router.route('/:taskId').get(async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const task = await taskService.getById(taskId);
    if (!task) throw new BaseError(`Task '${taskId}' not found`, NOT_FOUND);
    res.status(OK).json(task);
  } catch (err) {
    next(err);
  }
});

router.route('/').post(async (req: Request<{ boardId: string }>, res, next) => {
  try {
    const { boardId } = req.params;
    const { title, order, description } = req.body;
    const task = new Task(title, order, description, boardId);
    await taskService.addTask(task);
    res.status(CREATED).json(task);
  } catch (err) {
    next(err);
  }
});

router.route('/:taskdId').put(async (req, res, next) => {
  try {
    const { taskdId } = req.params;
    const { body } = req;
    const taskIndex = await taskService.updateTask({ ...body, id: taskdId });
    if (!taskIndex) throw new BaseError(`Task '${taskdId}' not found`, BAD_REQUEST);
    res.status(OK).json({ ...body, id: taskdId });
  } catch (err) {
    next(err);
  }
});

router.route('/:taskId').delete(async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const isTask = await taskService.deleteTask(req.params.taskId);
    if (!isTask) throw new BaseError(`Task '${taskId}' not found`, BAD_REQUEST);
    res.status(OK).send(OK);
  } catch (err) {
    next(err);
  }
});

export default router;
