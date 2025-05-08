import { Controller, Get, Param } from '@nestjs/common';
import { CandidateProfilesService } from './candidate-profiles.service';

@Controller('candidate-profiles')
export class CandidateProfilesController {
  constructor(
    private readonly candidateProfilesService: CandidateProfilesService,
  ) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.candidateProfilesService.findOne(id);
  }
}
