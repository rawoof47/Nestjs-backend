import { IsString } from 'class-validator';

export class CreateStatusCategoryDto {
  @IsString()
  categoryName: string;
}
