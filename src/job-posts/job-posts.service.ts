import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobPost } from './entities/job-post.entity';
import { CreateJobPostDto } from './dto';

@Injectable()
export class JobPostsService {
  constructor(
    @InjectRepository(JobPost)
    private readonly jobPostRepository: Repository<JobPost>,
  ) {}

  // Create a new job post
  async create(createJobPostDto: CreateJobPostDto) {
    // Create a new JobPost entity manually from CreateJobPostDto
    const jobPost = new JobPost();

    // Manually map the fields from DTO to entity
    jobPost.companyId = createJobPostDto.companyId;
    jobPost.title = createJobPostDto.title;
    jobPost.description = createJobPostDto.description;
    // Add other necessary fields based on your entity

    // Save the job post in the repository
    return this.jobPostRepository.save(jobPost);
  }

  // Get all job posts
  findAll() {
    return this.jobPostRepository.find();
  }

  // Get a job post by ID
  findOne(id: string) {
    return this.jobPostRepository.findOne({ where: { id } });
  }
}
