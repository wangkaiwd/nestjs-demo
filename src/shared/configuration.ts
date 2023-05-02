import * as process from 'process';
import { Configuration } from './types';

const PORT = 3000;

const configuration = (): Configuration => {
  return {
    port: process.env.PORT || PORT,
    databases: {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
  };
};
export default configuration;
