import { IsNotEmpty } from 'class-validator';
import { Permission } from '../types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    description: 'role name',
    example: 'admin',
  })
  @IsNotEmpty({
    message: "role name can't empty",
  })
  name: string;

  @ApiProperty({
    description: "role's permission",
    example: { shop: ['read', 'write'] },
  })
  @IsNotEmpty({
    message: "role's permission can't empty",
  })
  permission: Permission;
}
