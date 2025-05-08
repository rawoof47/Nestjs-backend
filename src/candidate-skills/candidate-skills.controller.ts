import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CandidateSkillsService } from './candidate-skills.service';
import { CreateCandidateSkillDto } from './dto/index';

@Controller('candidate-skills')
export class CandidateSkillsController {
  constructor(private readonly candidateSkillsService: CandidateSkillsService) {}

  @Post()
  create(@Body() createCandidateSkillDto: CreateCandidateSkillDto) {
    return this.candidateSkillsService.create(createCandidateSkillDto);
  }

  @Get()
  findAll() {
    return this.candidateSkillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.candidateSkillsService.findOne(id);
  }
}
