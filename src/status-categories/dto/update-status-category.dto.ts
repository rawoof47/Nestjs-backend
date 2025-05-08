import { IsString, IsOptional } from 'class-validator';

export class UpdateStatusCategoryDto {
  @IsOptional()
  @IsString()
  categoryName?: string;
}
