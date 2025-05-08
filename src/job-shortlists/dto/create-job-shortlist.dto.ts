import { IsString, IsUUID } from 'class-validator';

export class CreateJobShortlistDto {
  @IsString()
  @IsUUID()
  jobPostId: string;

  @IsString()
  @IsUUID()
  candidateId: string;
}
