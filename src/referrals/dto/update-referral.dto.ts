import { IsOptional, IsUUID } from 'class-validator';

export class UpdateReferralDto {
  @IsOptional()
  @IsUUID()
  referredUserId?: string;

  @IsOptional()
  @IsUUID()
  referrerUserId?: string;

  @IsOptional()
  @IsUUID()
  jobPostId?: string;
}
