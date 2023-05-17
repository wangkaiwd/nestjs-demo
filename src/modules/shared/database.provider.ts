import { MONGO_DATASOURCE } from '../../constants/provider-tokens';
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
      const { url, logging, synchronize } =
        configService.get<Database>('database') || {};
      const dataSource = new DataSource({
        type: 'mongodb',
        url,
        // todo: why this need config .{js,ts} ?
        entities: [path.join(__dirname, '../../**/*.mongo.entity.{js,ts}')],
        logging,
        synchronize,
        useNewUrlParser: true,
      });
      dataSource
        .initialize()
        .then(() => {
          console.log('Data Source has been initialized!');
        })
        .catch((err) => {
          console.error('Error during Data Source initialization', err);
        });
      return dataSource;
    },
  },
];

export default DatabaseProvider;
