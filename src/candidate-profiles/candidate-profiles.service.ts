import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CandidateProfile } from './entities/candidate-profile.entity'; // Correct import path
import { CreateCandidateProfileDto } from './dto/create-candidate-profile.dto'; // Assuming DTO is located in the dto folder

@Injectable()
export class CandidateProfilesService {
  constructor(
    @InjectRepository(CandidateProfile)
    private readonly candidateProfileRepository: Repository<CandidateProfile>,
  ) {}

  create(createCandidateProfileDto: CreateCandidateProfileDto) {
    const candidateProfile = this.candidateProfileRepository.create(createCandidateProfileDto);
    return this.candidateProfileRepository.save(candidateProfile);
  }

  findAll() {
    return this.candidateProfileRepository.find();
  }

  findOne(id: string) {
    return this.candidateProfileRepository.findOne({ where: { id } }); // Added findOne method
  }
}
