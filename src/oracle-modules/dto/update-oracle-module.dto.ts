import { IsString, IsUUID, IsOptional } from 'class-validator';

export class UpdateOracleModuleDto {
  @IsOptional()
  @IsString()
  @IsUUID()
  statusId?: string;

  @IsOptional()
  @IsString()
  moduleName?: string;
}
