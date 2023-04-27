import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 17600347824 })
  phone: number;

  @ApiProperty({ example: 'name' })
  name: string;

  @ApiProperty({ example: '12345678' })
  password: string;
}
