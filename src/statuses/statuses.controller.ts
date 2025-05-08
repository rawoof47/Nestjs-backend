import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { CreateStatusDto } from './dto';

@Controller('statuses')
export class StatusesController {
  constructor(private readonly statusesService: StatusesService) {}

  @Post()
  create(@Body() createStatusDto: CreateStatusDto) {
    return this.statusesService.create(createStatusDto);
  }

  @Get()
  findAll() {
    return this.statusesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusesService.findOne(id);
  }
}
