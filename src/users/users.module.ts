import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { CatsService } from './cats.service';

@Module({
  controllers: [UsersController],
  providers: [CatsService, UserService],
})
export class UsersModule {}
