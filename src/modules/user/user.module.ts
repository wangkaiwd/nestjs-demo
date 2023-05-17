import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import UserProvider from './user.provider';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [UserController],
  providers: [UserService, UserProvider],
})
export class UserModule {}
