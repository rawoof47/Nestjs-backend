import { IsUUID, IsString } from 'class-validator';

export class CreateApiAccessTokenDto {
  @IsUUID()
  userId: string;

  @IsString()
  token: string;

  @IsUUID()
  clientId: string;
}
