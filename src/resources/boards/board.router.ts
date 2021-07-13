import { Router } from 'express';
import { BaseError } from '../../common/errorHandler';
import {
  OK, CREATED, NOT_FOUND, BAD_REQUEST,
} from '../../common/statusCodes';
import * as boardService from './board.service';

const router = Router({ mergeParams: true });

router.route('/').get(async (_req, res, next) => {
  try {
    const boards = await boardService.getAll();
    res.status(OK).json(boards);
  } catch (err) {
    next(err);
  }
});
router.route('/:boardId').get(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const board = await boardService.getById(boardId);
    console.log(board);

    if (!board) throw new BaseError(`Board '${boardId}' not found`, NOT_FOUND);
    res.status(OK).json(board);
  } catch (err) {
    next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const { title, columns } = req.body;

    const booard = await boardService.add({ title, columns });
    res.status(CREATED).json(booard);
  } catch (err) {
    next(err);
  }
});

router.route('/:boardId').put(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const { body } = req;
    const isBoard = await boardService.update({ ...body, id: boardId });
    if (!isBoard) throw new BaseError(`Board '${boardId}' not found`, NOT_FOUND);
    res.status(OK).json({ ...body, id: boardId });
  } catch (err) {
    next(err);
  }
});

router.route('/:boardId').delete(async (req, res, next) => {
  try {
    const { boardId } = req.params;
    const isBoard = await boardService.deleteBoard(boardId);
    if (!isBoard) {
      throw new BaseError(`Board '${boardId}' not found`, BAD_REQUEST);
    }
    res.status(OK).send(OK);
  } catch (err) {
    next(err);
  }
});

export default router;
