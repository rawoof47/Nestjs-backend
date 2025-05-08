import { IsString, IsOptional } from 'class-validator';

export class UpdateStatusDto {
  @IsOptional()
  @IsString()
  statusName?: string;
}
