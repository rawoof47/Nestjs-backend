import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Badge } from './entities/badge.entity'; // Corrected import path
import { CreateBadgeDto } from './dto/create-badge.dto'; // Assuming DTO is located in the dto folder

@Injectable()
export class BadgesService {
  constructor(
    @InjectRepository(Badge)
    private readonly badgeRepository: Repository<Badge>,
  ) {}

  create(createBadgeDto: CreateBadgeDto) {
    const badge = this.badgeRepository.create(createBadgeDto);
    return this.badgeRepository.save(badge);
  }

  findAll() {
    return this.badgeRepository.find();
  }

  findOne(id: string) {
    return this.badgeRepository.findOne({ where: { id } }); // findOne method is added here
  }
}
