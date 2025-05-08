import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserBadgesService } from './user-badges.service';
import { CreateUserBadgeDto } from './dto';

@Controller('user-badges')
export class UserBadgesController {
  constructor(private readonly userBadgesService: UserBadgesService) {}

  @Post()
  create(@Body() createUserBadgeDto: CreateUserBadgeDto) {
    return this.userBadgesService.create(createUserBadgeDto);
  }

  @Get()
  findAll() {
    return this.userBadgesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBadgesService.findOne(id);
  }
}
