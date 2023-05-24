import { Injectable } from '@nestjs/common';
import LoggerService from '../../shared/logger/logger.service';
import PaginationParamsDto from '../../shared/dtos/pagination-params.dto';
import UserRepository from '../user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
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
