import { IsString } from 'class-validator';

export class CreateStatusDto {
  @IsString()
  statusName: string;
}
