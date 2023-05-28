import { Inject, Injectable } from '@nestjs/common';
import LoggerService from '../../shared/logger/logger.service';
import PaginationParamsDto from '../../shared/dtos/pagination-params.dto';
import { USER_REPOSITORY } from '../../../constants/provider-tokens';
import { MongoRepository } from 'typeorm';
import User from '../entities/user.mongo.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: MongoRepository<User>,
    private readonly logger: LoggerService,
  ) {
    this.logger.setContext(UserService.name);
  }

  findAll({ page, pageSize }: PaginationParamsDto) {
    return this.userRepository.findAndCount({
      order: { createAt: 'DESC' },
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }
}
