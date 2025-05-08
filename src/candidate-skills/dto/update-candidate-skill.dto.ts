import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateCandidateSkillDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  candidateProfileId?: string;

  @IsOptional()
  @IsString()
  skill?: string;
}
