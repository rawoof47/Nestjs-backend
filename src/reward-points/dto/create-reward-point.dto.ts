import { IsUUID, IsInt, Min } from 'class-validator';

export class CreateRewardPointDto {
  @IsUUID()
  userId: string;

  @IsInt()
  @Min(0)
  totalPoints: number;

  @IsInt()
  @Min(0)
  lifetimePoints: number;
}
