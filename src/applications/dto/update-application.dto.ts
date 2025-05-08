import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateApplicationDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  jobPostId?: string;

  @IsOptional()
  @IsString()
  @IsUUID()
  candidateId?: string;
}
