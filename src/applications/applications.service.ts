import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './entities/application.entity'; // Corrected import path
import { CreateApplicationDto } from './dto/create-application.dto'; // Assuming DTO is located in the dto folder

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private readonly applicationRepository: Repository<Application>,
  ) {}

  create(createApplicationDto: CreateApplicationDto) {
    const application = this.applicationRepository.create(createApplicationDto);
    return this.applicationRepository.save(application);
  }

  findAll() {
    return this.applicationRepository.find();
  }

  findOne(id: string) {
    return this.applicationRepository.findOne({ where: { id } }); // Added the findOne method
  }
}
