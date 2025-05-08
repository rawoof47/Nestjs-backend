import { IsString, IsUUID } from 'class-validator';

export class CreateReferralDto {
  @IsString()
  @IsUUID()
  referredUserId: string;

  @IsString()
  referralCode: string;
}
