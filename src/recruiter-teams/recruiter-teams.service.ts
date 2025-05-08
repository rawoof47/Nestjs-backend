import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecruiterTeam } from './entities/recruiter-team.entity';
import { CreateRecruiterTeamDto } from './dto';

@Injectable()
export class RecruiterTeamsService {
  constructor(
    @InjectRepository(RecruiterTeam)
    private readonly recruiterTeamRepository: Repository<RecruiterTeam>,
  ) {}

  create(dto: CreateRecruiterTeamDto) {
    const team = this.recruiterTeamRepository.create(dto as Partial<RecruiterTeam>);
    return this.recruiterTeamRepository.save(team);
  }

  findAll() {
    return this.recruiterTeamRepository.find();
  }

  findOne(id: string) {
    return this.recruiterTeamRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.recruiterTeamRepository.delete(id);
  }
}
