import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { SharedModule } from '../shared/shared.module';
import AuthController from './controllers/auth.controller';
import AuthService from './services/auth.service';
import UserRepository from './user.repository';

@Module({
  imports: [SharedModule],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService, UserRepository],
})
export class UserModule {}
