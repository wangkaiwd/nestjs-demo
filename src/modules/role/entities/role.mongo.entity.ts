import { Entity } from 'typeorm';
import Common from '../../shared/entities/common.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

type PermissionType = 'read' | 'write';

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
  name: string;

  @ApiProperty({
    description: 'role permission',
    example: {
      log: ['read', 'write'],
      shop: ['read'],
    },
  })
  permission: {
    [key: string]: PermissionType[];
  };
}

export default Role;
