import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidateSkill } from './entities/candidate-skill.entity';  // Corrected import path
import { CreateCandidateSkillDto } from './dto/create-candidate-skill.dto';  // Assuming DTO is located in the dto folder

@Injectable()
export class CandidateSkillsService {
  constructor(
    @InjectRepository(CandidateSkill)
    private readonly candidateSkillRepository: Repository<CandidateSkill>,
  ) {}

  create(createCandidateSkillDto: CreateCandidateSkillDto) {
    const candidateSkill = this.candidateSkillRepository.create(createCandidateSkillDto);
    return this.candidateSkillRepository.save(candidateSkill);
  }

  findAll() {
    return this.candidateSkillRepository.find();
  }

  findOne(id: string) {
    return this.candidateSkillRepository.findOne({ where: { id } });  // Added findOne method
  }
}
