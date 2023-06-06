import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class AddRoleDto {
  @ApiProperty({
    description: 'user id',
    example: '6473671b953a31eeebb6499f',
  })
  userId: string;

  @ApiPropertyOptional({
    description: 'role id',
  })
  roleId: string;
}

export default AddRoleDto;
