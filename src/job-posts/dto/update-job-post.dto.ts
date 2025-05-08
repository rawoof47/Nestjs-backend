import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateJobPostDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  recruiterId?: string;

  @IsOptional()
  @IsString()
  title?: string;
}
