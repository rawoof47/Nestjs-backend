import { IsUUID, IsOptional } from 'class-validator';

export class UpdateUserBadgeDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsUUID()
  badgeId?: string;
}
