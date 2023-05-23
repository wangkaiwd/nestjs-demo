import { MongoRepository } from 'typeorm';
import User from '../entities/user.mongo.entity';
import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../../constants/provider-tokens';
import LoggerService from '../../shared/logger/logger.service';
import PaginationParamsDto from '../../shared/dtos/pagination-params.dto';

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
