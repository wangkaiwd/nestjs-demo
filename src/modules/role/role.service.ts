import { Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ROLE_REPOSITORY } from '../../constants/provider-tokens';
import { MongoRepository } from 'typeorm';
import Role from './entities/role.mongo.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class RoleService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private readonly roleRepository: MongoRepository<Role>,
  ) {}

  create(createRoleDto: CreateRoleDto) {
    this.roleRepository.create({
      name: createRoleDto.name,
    });
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return this.roleRepository.findOneBy({ _id: new ObjectId(id) });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
