import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

class PaginationParamsDto {
  @ApiPropertyOptional({
    type: Number,
    example: 5,
  })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  pageSize = 5;

  @ApiPropertyOptional({
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => parseInt(value), { toClassOnly: true })
  page = 1;
}

export default PaginationParamsDto;
