import { FactoryProvider } from '@nestjs/common';
import {
  MONGO_DATASOURCE,
  ROLE_REPOSITORY,
} from '../../constants/provider-tokens';
import { DataSource } from 'typeorm';
import Role from './entities/role.mongo.entity';

export const RoleRepository: FactoryProvider = {
  provide: ROLE_REPOSITORY,
  inject: [MONGO_DATASOURCE],
  useFactory: (appDataSource: DataSource) => {
    return appDataSource.getRepository(Role);
  },
};
