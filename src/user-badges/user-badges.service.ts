import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserBadge } from './entities/user-badge.entity';
import { CreateUserBadgeDto } from './dto/create-user-badge.dto';

@Injectable()
export class UserBadgesService {
  constructor(
    @InjectRepository(UserBadge)
    private readonly userBadgeRepository: Repository<UserBadge>,
  ) {}

  async create(createUserBadgeDto: CreateUserBadgeDto) {
    // Create a new UserBadge from DTO
    const userBadge = this.userBadgeRepository.create(createUserBadgeDto);
    return await this.userBadgeRepository.save(userBadge);
  }

  async findAll() {
    return await this.userBadgeRepository.find();
  }

  async findOne(id: string) {
    return await this.userBadgeRepository.findOne({ where: { id } });
  }
}
