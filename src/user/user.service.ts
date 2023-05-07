import { MongoRepository } from 'typeorm';
import User from './entities/user.mongo.entities';
import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../constants/provider-tokens';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  create() {
    return this.userRepository.save({
      name: 'hh',
      phone: 178,
      password: 'xxx',
    });
    // return 'this is userSercie create!';
  }

  findAll() {
    return this.userRepository.findAndCount();
    // return 'find all';
  }
}
