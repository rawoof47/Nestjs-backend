import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { JobShortlistsService } from './job-shortlists.service';
import { CreateJobShortlistDto } from './dto';

@Controller('job-shortlists')
export class JobShortlistsController {
  constructor(private readonly jobShortlistsService: JobShortlistsService) {}

  @Post()
  create(@Body() createJobShortlistDto: CreateJobShortlistDto) {
    return this.jobShortlistsService.create(createJobShortlistDto);
  }

  @Get()
  findAll() {
    return this.jobShortlistsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobShortlistsService.findOne(id);
  }
}
