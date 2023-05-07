export interface Database {
  password: string;
  username: string;
  databaseName: string;
  url: string;
}

export interface Configuration {
  port: string | number;
  database: Database;
}
