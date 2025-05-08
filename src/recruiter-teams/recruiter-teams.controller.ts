import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RecruiterTeamsService } from './recruiter-teams.service';
import { CreateRecruiterTeamDto } from './dto';

@Controller('recruiter-teams')
export class RecruiterTeamsController {
  constructor(private readonly recruiterTeamsService: RecruiterTeamsService) {}

  @Post()
  create(@Body() createRecruiterTeamDto: CreateRecruiterTeamDto) {
    return this.recruiterTeamsService.create(createRecruiterTeamDto);
  }

  @Get()
  findAll() {
    return this.recruiterTeamsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recruiterTeamsService.findOne(id);
  }
}
