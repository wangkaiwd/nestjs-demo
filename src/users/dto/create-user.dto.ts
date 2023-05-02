import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: 17600347824 })
  phone: number;

  @ApiProperty({ example: 'name' })
  name?: string;

  @ApiProperty({ example: '12345678' })
  password: string;
}
