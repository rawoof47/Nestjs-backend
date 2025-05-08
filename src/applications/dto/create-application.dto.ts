import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateApplicationDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  jobId: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
