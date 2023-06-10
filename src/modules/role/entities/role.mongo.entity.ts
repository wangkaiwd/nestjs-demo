import { Column, Entity } from 'typeorm';
import Common from '../../shared/entities/common.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Permission } from '../types';

@Entity()
class Role extends Common {
  @ApiProperty({
    description: 'role name',
    example: 'admin',
  })
  @IsNotEmpty({
    message: 'role name is not empty',
  })
  @IsString({
    message: 'role name must is string type',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'role permission',
    example: {
      log: ['read', 'write'],
      shop: ['read'],
    },
  })
  @Column()
  permission: Permission;
}

export default Role;
