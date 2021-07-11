import { ConnectionOptions } from 'typeorm';
import {
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
} from './conctans-evn';

export const configDB = {
  name: 'default',
  type: 'postgres',
  host: POSTGRES_HOST,
  port: parseInt(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  synchronize: true,
  logging: true,
  dropSchema: true,
  migrationsRun: true,
  maxQueryExecutionTime: 100,
  entities: ['dist/entity/*.entity{ .ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions;
