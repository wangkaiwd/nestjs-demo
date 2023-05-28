import * as process from 'process';
import { Configuration } from './types';

const PORT = 3306;

const configuration = (): Configuration => {
  return {
    port: process.env.PORT || PORT,
    env: process.env.APP_ENV as any,
    database: {
      url: process.env.DB_URL!,
      username: process.env.DB_USER!,
      databaseName: process.env.DB_NAME!,
      password: process.env.DB_PASS!,
      synchronize: process.env.DB_SYNCHRONIZE as any,
      logging: process.env.DB_LOGGING as any,
    },
    jwt: {
      secret: process.env.JWT_SECRET!,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN!,
      },
    },
  };
};
export default configuration;
