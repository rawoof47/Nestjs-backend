import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCandidateSkillDto {
  @IsString()
  @IsNotEmpty()
  skillName: string;

  @IsString()
  @IsNotEmpty()
  level: string;
}
