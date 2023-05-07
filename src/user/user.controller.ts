import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  create() {
    return this.userService.create();
  }

  @Get('/findAll')
  findAll() {
    return this.userService.findAll();
  }
}
