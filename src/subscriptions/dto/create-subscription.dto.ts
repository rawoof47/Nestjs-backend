import { IsString, IsUUID } from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  @IsUUID()
  userId: string;

  @IsString()
  subscriptionPlan: string;
}
