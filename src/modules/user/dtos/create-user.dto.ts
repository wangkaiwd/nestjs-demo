import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

class CreateUserDto {
  @ApiProperty({
    description: 'username',
    example: 'sppk',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'phone number',
    example: '18600228421',
  })
  @ApiProperty({
    description: 'account password',
    example: '123456',
  })
  @IsNotEmpty()
  password: string;
}

export default CreateUserDto;
