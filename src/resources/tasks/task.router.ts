import { Router, Request } from 'express';
import { Task } from './task.model';
import * as taskService from './task.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  try {
    const tasks = await taskService.getAll();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).send(404);
  }
});

router.route('/:taskId').get(async (req, res) => {
  const { taskId } = req.params;
  const task = await taskService.getById(taskId);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).send(404);
  }
});

router.route('/').post(async (req: Request<{ boardId: string }>, res) => {
  try {
    const { boardId } = req.params;
    const { title, order, description } = req.body;
    const task = new Task(title, order, description, boardId);
    await taskService.addTask(task);
    res.status(201).json(task);
  } catch (err) {
    res.status(404).send(404);
  }
});

router.route('/:taskdId').put(async (req, res) => {
  try {
    const { taskdId } = req.params;
    const { body } = req;
    await taskService.updateTask({ ...body, id: taskdId });
    res.status(200).json({ ...body, id: taskdId });
  } catch (err) {
    res.status(404).send(404);
  }
});

router.route('/:taskId').delete(async (req, res) => {
  try {
    await taskService.deleteTask(req.params.taskId);
    res.status(200).send(200);
  } catch (err) {
    res.status(404).send(404);
  }
});

export default router;
