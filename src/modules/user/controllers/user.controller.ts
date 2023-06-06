import { UserService } from '../services/user.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import PaginationParamsDto from '../../shared/dtos/pagination-params.dto';
import AddRoleDto from '../dtos/add-role.dto';

@Controller('/user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/findAll')
  async findAll(@Query() query: PaginationParamsDto) {
    const [data, count] = await this.userService.findAll(query);
    return {
      list: data,
      total: count,
      ...query,
    };
  }

  @Post('/addRole')
  addRole(@Body() addRoleDto: AddRoleDto) {
    this.userService.addRole(addRoleDto);
  }
}
