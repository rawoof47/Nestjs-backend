import { IsString, IsUUID } from 'class-validator';

export class CreateOracleModuleDto {
  @IsString()
  @IsUUID()
  statusId: string;

  @IsString()
  moduleName: string;
}
