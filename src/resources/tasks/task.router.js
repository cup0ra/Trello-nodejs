const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const taskService = require('./task.service');

router.route('/').get(async (req, res) => {
    const tasks = await taskService.getAll()
    try { 
        res.status(200).json(tasks);
      }
      catch(err){
        res.status(404).send(404)
      }
    });

    router.route('/:taskId').get(async (req, res) => {
        const { taskId } = req.params;
        const task = await taskService.getById(taskId);
      if(task){
          res.status(200).json(task);
        }
       else{
          res.status(404).send(404)
        }
      });
    
      router.route('/').post(async (req, res) => {
          const { boardId } = req.params
        const board = new Task({...req.body, boardId})
        await taskService.addTask(board);
         try { 
          res.status(201).json(board);
        }
        catch(err){
          res.status(404).send(404)
        }
      });
    
      router.route('/:taskdId').put(async (req, res) => {
        const { taskdId } = req.params;
           const { body } = req;
         await taskService.updateTask({...body, id: taskdId});
         try { 
          res.status(200).json({...body, id: taskdId});
        }
        catch(err){
          res.status(404).send(404)
        }
      });
      
      router.route('/:taskId').delete(async (req, res) => {
      await taskService.deleteTask(req.params.taskId)
       try { 
        res.status(200).send(200);
      }
      catch(err){
        res.status(404).send(404)
      }
      });

module.exports = router;