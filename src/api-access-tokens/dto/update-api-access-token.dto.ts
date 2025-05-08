import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateApiAccessTokenDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsString()
  token?: string;
}
