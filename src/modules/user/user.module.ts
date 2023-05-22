import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import UserProvider from './user.provider';
import { SharedModule } from '../shared/shared.module';
import AuthController from './controllers/auth.controller';
import AuthService from './services/auth.service';

@Module({
  imports: [SharedModule],
  controllers: [UserController, AuthController],
  providers: [UserService, UserProvider, AuthService],
})
export class UserModule {}
