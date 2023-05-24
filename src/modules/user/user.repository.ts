import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import User from './entities/user.mongo.entity';

@Injectable()
class UserRepository extends Repository<User> {}

export default UserRepository;
