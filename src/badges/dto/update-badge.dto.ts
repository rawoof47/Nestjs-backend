import { IsString, IsOptional } from 'class-validator';

export class UpdateBadgeDto {
  @IsOptional()
  @IsString()
  name?: string;
}
