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

@Controller('users')
@ApiTags('User Information')
export class UsersController {
  constructor(
    readonly userService: UserService,
    readonly catsService: CatsService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('create', this.userService.create());
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // this.catsService.create();
    // return createUserDto;
  }
}
