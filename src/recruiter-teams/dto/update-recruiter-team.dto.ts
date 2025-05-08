import { IsString, IsOptional } from 'class-validator';

export class UpdateRecruiterTeamDto {
  @IsOptional()
  @IsString()
  teamName?: string;
}
