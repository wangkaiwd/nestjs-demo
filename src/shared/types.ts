export interface Database {
  password: string;
  username: string;
  databaseName: string;
  url: string;
  logging: boolean;
  synchronize: boolean;
}

export interface Configuration {
  port: string | number;
  env: 'development' | 'production';
  database: Database;
}
