import { IsString, IsUUID } from 'class-validator';

export class CreateContentModerationDto {
  @IsString()
  @IsUUID()
  contentId: string;

  @IsString()
  reviewedBy: string;

  @IsString()
  flaggedBy: string;
}
