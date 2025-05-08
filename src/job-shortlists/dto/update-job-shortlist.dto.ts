import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateJobShortlistDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  jobPostId?: string;

  @IsOptional()
  @IsString()
  @IsUUID()
  candidateId?: string;
}
