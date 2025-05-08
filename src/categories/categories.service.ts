import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  // Create a new category
  create(createCategoryDto: CreateCategoryDto) {
    // Transform CreateCategoryDto to Category entity using plainToClass
    const category = plainToClass(Category, createCategoryDto);
    return this.categoryRepository.save(category);
  }

  // Get all categories
  findAll() {
    return this.categoryRepository.find();
  }

  // Get category by ID
  findOne(id: string) {
    return this.categoryRepository.findOne({ where: { id } });
  }
}
