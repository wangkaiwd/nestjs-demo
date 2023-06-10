import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ROLE_REPOSITORY } from '../../constants/provider-tokens';
import { MongoRepository } from 'typeorm';
import Role from './entities/role.mongo.entity';
import { ObjectId } from 'mongodb';
import PaginationParamsDto from '../shared/dtos/pagination-params.dto';

@Injectable()
export class RoleService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private readonly roleRepository: MongoRepository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const role = await this.roleRepository.findOneBy({
      name: createRoleDto.name,
    });
    if (role) {
      throw new BadRequestException('role name repeat');
    }
    await this.roleRepository.save(createRoleDto);
  }

  async findAll(query: PaginationParamsDto) {
    const { page, pageSize } = query;
    return await this.roleRepository.findAndCount({
      take: pageSize,
      skip: (page - 1) * pageSize,
    });
  }

  findOne(id: string) {
    return this.roleRepository.findOneBy({ _id: new ObjectId(id) });
  }

  update(id: string, updateRoleDto: UpdateRoleDto) {
    this.roleRepository.update(id, { ...updateRoleDto });
  }

  // how to delete column
  remove(id: string) {
    return this.roleRepository.update(id, { isDelete: true });
  }
}
