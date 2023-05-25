import { Inject, Injectable } from '@nestjs/common';
import LoggerService from '../../shared/logger/logger.service';
import PaginationParamsDto from '../../shared/dtos/pagination-params.dto';
import UserRepository from '../user.repository';
import { USER_REPOSITORY } from '../../../constants/provider-tokens';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
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
