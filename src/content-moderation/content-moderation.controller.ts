import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ContentModerationService } from './content-moderation.service';
import { CreateContentModerationDto } from './dto';

@Controller('content-moderation')
export class ContentModerationController {
  constructor(private readonly contentModerationService: ContentModerationService) {}

  @Post()
  create(@Body() createContentModerationDto: CreateContentModerationDto) {
    return this.contentModerationService.create(createContentModerationDto);
  }

  @Get()
  findAll() {
    return this.contentModerationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentModerationService.findOne(id);
  }
}
