import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { RewardPointsService } from './reward-points.service';
import { CreateRewardPointDto } from './dto';

@Controller('reward-points')
export class RewardPointsController {
  constructor(private readonly rewardPointsService: RewardPointsService) {}

  @Post()
  create(@Body() createRewardPointDto: CreateRewardPointDto) {
    return this.rewardPointsService.create(createRewardPointDto);
  }

  @Get()
  findAll() {
    return this.rewardPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rewardPointsService.findOne(id);
  }
}
