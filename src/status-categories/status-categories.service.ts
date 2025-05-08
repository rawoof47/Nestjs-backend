import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusCategory } from './entities/status-category.entity';
import { CreateStatusCategoryDto } from './dto';

@Injectable()
export class StatusCategoriesService {
  constructor(
    @InjectRepository(StatusCategory)
    private readonly statusCategoryRepository: Repository<StatusCategory>,
  ) {}

  create(dto: CreateStatusCategoryDto) {
    const category = this.statusCategoryRepository.create(dto as Partial<StatusCategory>);
    return this.statusCategoryRepository.save(category);
  }

  findAll() {
    return this.statusCategoryRepository.find();
  }

  findOne(id: string) {
    return this.statusCategoryRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.statusCategoryRepository.delete(id);
  }
}
