import { IsString, IsUUID } from 'class-validator';

export class CreateJobPostDto {
  @IsUUID()
  companyId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;
}
