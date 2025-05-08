import { IsUUID } from 'class-validator';

export class CreateUserBadgeDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  badgeId: string;
}
