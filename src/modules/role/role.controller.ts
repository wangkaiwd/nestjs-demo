import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiTags } from '@nestjs/swagger';
import PaginationParamsDto from '../shared/dtos/pagination-params.dto';

@ApiTags('Role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() createRoleDto: CreateRoleDto) {
    // why this must be use async await to return error response to client ?
    await this.roleService.create(createRoleDto);
    // this code not work
    // this.roleService.create(createRoleDto);
  }

  @Get()
  async findAll(@Query() query: PaginationParamsDto) {
    const [result, total] = await this.roleService.findAll(query);
    return {
      list: result,
      total,
      ...query,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.roleService.remove(id);
  }
}
