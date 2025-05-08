import { IsUUID, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateRewardPointDto {
  @IsOptional()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  totalPoints?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  lifetimePoints?: number;
}
