import { FactoryProvider } from '@nestjs/common';
import {
  MONGO_DATASOURCE,
  USER_REPOSITORY,
} from '../../constants/provider-tokens';
import { DataSource } from 'typeorm';
import User from './entities/user.mongo.entity';

const UserRepository: FactoryProvider = {
  provide: USER_REPOSITORY,
  inject: [MONGO_DATASOURCE],
  useFactory: (appDataSource: DataSource) => {
    return appDataSource.getRepository(User);
  },
};

export default UserRepository;
