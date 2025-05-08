import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateContentModerationDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  contentId?: string;

  @IsOptional()
  @IsString()
  reviewedBy?: string;

  @IsOptional()
  @IsString()
  flaggedBy?: string;
}
