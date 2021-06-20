
import { ConnectionOptions } from "typeorm";
import { DB_HOST, PORT_DB, USER_DB, PASSWORD_DB, DB } from "./conctans-evn";

 const configDB = {
    type: 'postgres',
    host: DB_HOST,
    port: PORT_DB,
    username: USER_DB,
    password: PASSWORD_DB,
    database: DB,
    synchronize: false,
    logging: true,
    maxQueryExecutionTime: 100,
    entities: ['src/entity/*.entity*.entity.ts'],
      migrations: ["src/migration/*.ts"],
      cli: {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration"
      }
  } as ConnectionOptions;

  export = configDB;