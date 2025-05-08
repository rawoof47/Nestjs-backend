import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StatusCategoriesService } from './status-categories.service';
import { CreateStatusCategoryDto } from './dto';

@Controller('status-categories')
export class StatusCategoriesController {
  constructor(private readonly statusCategoriesService: StatusCategoriesService) {}

  @Post()
  create(@Body() createStatusCategoryDto: CreateStatusCategoryDto) {
    return this.statusCategoriesService.create(createStatusCategoryDto);
  }

  @Get()
  findAll() {
    return this.statusCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusCategoriesService.findOne(id);
  }
}
