import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OracleModulesService } from './oracle-modules.service';
import { CreateOracleModuleDto } from './dto';

@Controller('oracle-modules')
export class OracleModulesController {
  constructor(private readonly oracleModulesService: OracleModulesService) {}

  @Post()
  create(@Body() createOracleModuleDto: CreateOracleModuleDto) {
    return this.oracleModulesService.create(createOracleModuleDto);
  }

  @Get()
  findAll() {
    return this.oracleModulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oracleModulesService.findOne(id);
  }
}
