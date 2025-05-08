import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentModeration } from './entities/content-moderation.entity';
import { CreateContentModerationDto } from './dto';

@Injectable()
export class ContentModerationService {
  constructor(
    @InjectRepository(ContentModeration)
    private readonly contentModerationRepository: Repository<ContentModeration>,
  ) {}

  create(dto: CreateContentModerationDto) {
    const moderation = this.contentModerationRepository.create(dto);
    return this.contentModerationRepository.save(moderation);
  }

  findAll() {
    return this.contentModerationRepository.find();
  }

  findOne(id: string) {
    return this.contentModerationRepository.findOne({ where: { id } });
  }
}
