import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobShortlist } from './entities/job-shortlist.entity';
import { CreateJobShortlistDto } from './dto';

@Injectable()
export class JobShortlistsService {
  constructor(
    @InjectRepository(JobShortlist)
    private readonly jobShortlistRepository: Repository<JobShortlist>,
  ) {}

  create(dto: CreateJobShortlistDto) {
    const shortlist = this.jobShortlistRepository.create(dto as Partial<JobShortlist>);
    return this.jobShortlistRepository.save(shortlist);
  }

  findAll() {
    return this.jobShortlistRepository.find();
  }

  findOne(id: string) {
    return this.jobShortlistRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.jobShortlistRepository.delete(id);
  }
}
