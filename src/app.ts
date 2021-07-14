import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { loggers } from './middleware/logging';
import { BaseError, handleError, uncaughtOrUnhandledError } from './common/errorHandler';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use(loggers);
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);

app.use(handleError);

process.on('unhandledRejection', (err: BaseError) => uncaughtOrUnhandledError(err, 'Rejection:'));

process.on('uncaughtException', (err: BaseError) => uncaughtOrUnhandledError(err, 'Exception:'));

/* Promise.reject(Error('Oops!')); */
/* throw Error('Oops!'); */

export default app;
