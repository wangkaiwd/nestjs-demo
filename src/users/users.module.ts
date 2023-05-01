import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { CatsService } from './cats.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [UsersController],
  providers: [CatsService, UserService],
})
export class UsersModule {}
