import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

class RegisterDto {
  @ApiProperty({
    example: 'sppk',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: '123456',
  })
  @IsNotEmpty()
  password: string;
}

export default RegisterDto;
