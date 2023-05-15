import { MongoRepository } from 'typeorm';
import User from './entities/user.mongo.entity';
import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../constants/provider-tokens';
import LoggerService from '../shared/logger/logger.service';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: MongoRepository<User>,
    private readonly logger: LoggerService,
  ) {
    this.logger.setContext(UserService.name);
  }

  create() {
    this.logger.info({ message: 'create', meta: { a: 1, b: 2 } });
    return this.userRepository.save({
      name: 'hh',
      phone: 178,
      password: 'xxx',
    });
  }

  findAll() {
    return this.userRepository.findAndCount();
  }
}
