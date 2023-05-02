import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CatsService } from './cats.service';
import { ConfigService } from '@nestjs/config';
import { Configuration } from '../shared/types';

@Controller('users')
@ApiTags('User Information')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly catsService: CatsService,
    private readonly configService: ConfigService<Configuration>,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('create', this.userService.create());
    console.log('config', this.configService.get('databases'));
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // this.catsService.create();
    // return createUserDto;
  }
}
