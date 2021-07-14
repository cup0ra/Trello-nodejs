import { createConnection } from 'typeorm';
import app from './app';
import { config } from './common/config';
import 'reflect-metadata';
import configDB from './common/ormconfig';

createConnection(configDB).then(async () => {
  app.listen(config.PORT, () => console.log(`App is running on http://localhost:${config.PORT}`));
}).catch((error) => console.log('Error: ', error));
