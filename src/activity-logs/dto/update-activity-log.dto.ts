import { IsString, IsOptional } from 'class-validator';

export class UpdateActivityLogDto {
  @IsString()
  @IsOptional()
  description?: string; // Example field
}
