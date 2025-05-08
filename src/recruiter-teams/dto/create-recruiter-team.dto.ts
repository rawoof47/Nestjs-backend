import { IsString } from 'class-validator';

export class CreateRecruiterTeamDto {
  @IsString()
  teamName: string;
}
