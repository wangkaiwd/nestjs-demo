import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { SharedModule } from '../shared/shared.module';
import AuthController from './controllers/auth.controller';
import AuthService from './services/auth.service';
import UserRepository from './user.provider';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { Configuration } from '../shared/types';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [
    RoleModule,
    SharedModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [SharedModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Configuration>) =>
        configService.get('jwt')!,
    }),
  ],
  controllers: [UserController, AuthController],
  providers: [UserService, UserRepository, AuthService, JwtStrategy],
})
export class UserModule {}
