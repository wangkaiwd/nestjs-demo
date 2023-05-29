import { Request } from 'express';

export interface Database {
  password: string;
  username: string;
  databaseName: string;
  url: string;
  logging: boolean;
  synchronize: boolean;
}

export interface JWT {
  secret: string;
  signOptions: {
    expiresIn: string;
  };
}

export interface Configuration {
  port: string | number;
  env: 'development' | 'production';
  database: Database;
  jwt: JWT;
}

export interface RequestWithUser extends Request {
  user: { id: string };
}
