import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateCandidateProfileDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  userId?: string;

  @IsOptional()
  @IsString()
  bio?: string;
}
