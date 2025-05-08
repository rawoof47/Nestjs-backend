import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from './entities/status.entity';
import { CreateStatusDto } from './dto';

@Injectable()
export class StatusesService {
  constructor(
    @InjectRepository(Status)
    private readonly statusRepository: Repository<Status>,
  ) {}

  create(dto: CreateStatusDto) {
    const status = this.statusRepository.create(dto as Partial<Status>);
    return this.statusRepository.save(status);
  }

  findAll() {
    return this.statusRepository.find();
  }

  findOne(id: string) {
    return this.statusRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.statusRepository.delete(id);
  }
}
