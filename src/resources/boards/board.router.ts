import { Router } from 'express';
import Board from './board.model';
import * as boardService from './board.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res) => {
  try {
    const boards = await boardService.getAll();
    res.status(200).json(boards);
  } catch (err) {
    res.status(404).send(404);
  }
});
router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;
  const board = await boardService.getById(boardId);
  if (board) {
    res.status(200).json(board);
  } else {
    res.status(404).send(404);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { title, columns } = req.body;
    const board = new Board(title, columns);
    await boardService.add(board);
    res.status(201).json(board);
  } catch (err) {
    res.status(404).send(404);
  }
});

router.route('/:boardId').put(async (req, res) => {
  try {
    const { boardId } = req.params;
    const { body } = req;
    await boardService.update({ ...body, id: boardId });
    res.status(200).json({ ...body, id: boardId });
  } catch (err) {
    res.status(404).send(404);
  }
});

router.route('/:boardId').delete(async (req, res) => {
  try {
    const { boardId } = req.params;
    await boardService.deleteBoard(boardId);
    res.status(200).send(200);
  } catch (err) {
    res.status(404).send(404);
  }
});

export default router;
