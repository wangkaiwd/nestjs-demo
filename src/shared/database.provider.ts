import { MONGO_DATASOURCE } from '../constants/provider-tokens';
import { ConfigService } from '@nestjs/config';
import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
import { Configuration, Database } from './types';
import { DataSource } from 'typeorm';
import path from 'path';

const DatabaseProvider: FactoryProvider<DataSource>[] = [
  {
    provide: MONGO_DATASOURCE,
    inject: [ConfigService],
    useFactory: (configService: ConfigService<Configuration>) => {
      const { username, password, url, databaseName } =
        configService.get<Database>('database') || {};
      const dataSource = new DataSource({
        type: 'mongodb',
        url,
        database: databaseName,
        entities: [path.join(__dirname, '../../**/*.mongo.entities.ts')],
        username,
        password,
      });
      dataSource.initialize();
      return dataSource;
    },
  },
];

export default DatabaseProvider;
