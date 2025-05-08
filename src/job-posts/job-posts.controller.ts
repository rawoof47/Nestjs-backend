import { Controller, Get, Param } from '@nestjs/common';
import { JobPostsService } from './job-posts.service';

@Controller('job-posts')
export class JobPostsController {
  constructor(private readonly jobPostsService: JobPostsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jobPostsService.findOne(id);
  }
}
