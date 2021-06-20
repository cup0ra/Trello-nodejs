import { AUTH_MODE, PORT, NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY } from "./conctans-evn";




 export const config = {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE: AUTH_MODE === 'true',
};


