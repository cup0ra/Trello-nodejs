const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service')

router.use((req, res, next) => {
  // do logging
  console.log('LOGGER',req.method, req.body);
  next(); // make sure we go to the next routes and don't stop here
});

router.route('/').get(async (req, res) => {
const boards = await boardService.getAll()
  try { 
    res.status(200).json(boards);
  }
  catch(err){
    res.status(404).send(404)
  }
});
router.route('/:boardId').get(async (req, res) => {
    const { boardId } = req.params;
    const board = await boardService.getById(boardId);
    console.log('BORD______ID', board, boardId);
  if(board){
      res.status(200).json(board);
    }
   else{
      res.status(404).send(404)
    }
  });

  router.route('/').post(async (req, res) => {
    const board = new Board(req.body)
    await boardService.add(board);
     console.log('BOARD',board, Board.toResponse(board),req.body)
     try { 
      res.status(201).json(board);
    }
    catch(err){
      res.status(404).send(404)
    }
  });

  router.route('/:boardId').put(async (req, res) => {
    const { boardId } = req.params;
       const { body } = req;
     await boardService.update({...body, id: boardId});
     try { 
      res.status(200).json({...body, id: boardId});
    }
    catch(err){
      res.status(404).send(404)
    }
  });
  
  router.route('/:boardId').delete(async (req, res) => {
  await boardService.deleteBoard(req.params.boardId)
   try { 
    res.status(200).send(200);
  }
  catch(err){
    res.status(404).send(404)
  }
  });

module.exports = router;