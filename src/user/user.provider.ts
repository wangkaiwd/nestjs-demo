import { FactoryProvider } from '@nestjs/common/interfaces/modules/provider.interface';
import {
  MONGO_DATASOURCE,
  USER_REPOSITORY,
} from '../constants/provider-tokens';
import { DataSource } from 'typeorm';
import User from './entities/user.mongo.entities';

const UserProvider: FactoryProvider = {
  provide: USER_REPOSITORY,
  inject: [MONGO_DATASOURCE],
  useFactory: (appDataSource: DataSource) => {
    return appDataSource.getRepository(User);
  },
};

export default UserProvider;
