import { IsString, IsUUID, IsDateString } from 'class-validator';

export class CreateActivityLogDto {
  @IsUUID()
  userId: string;

  @IsString()
  action: string;

  @IsDateString()
  timestamp: string; // Assuming the entity has a timestamp field
}
