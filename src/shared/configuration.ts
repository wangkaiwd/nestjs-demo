import * as process from 'process';
import { Configuration } from './types';

const PORT = 3306;

const configuration = (): Configuration => {
  return {
    port: process.env.PORT || PORT,
    database: {
      url: 'localhost:3306',
      username: process.env.DATABASE_USERNAME!,
      databaseName: process.env.DATABASE_NAME!,
      password: process.env.DATABASE_PASSWORD!,
    },
  };
};
export default configuration;
