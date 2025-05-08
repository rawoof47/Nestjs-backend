import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RewardPoint } from './entities/reward-point.entity';
import { CreateRewardPointDto } from './dto';

@Injectable()
export class RewardPointsService {
  constructor(
    @InjectRepository(RewardPoint)
    private readonly rewardPointRepository: Repository<RewardPoint>,
  ) {}

  create(dto: CreateRewardPointDto) {
    const reward = this.rewardPointRepository.create(dto);
    return this.rewardPointRepository.save(reward);
  }

  findAll() {
    return this.rewardPointRepository.find();
  }

  findOne(userId: string) {
    return this.rewardPointRepository.findOne({ where: { userId } });
  }
}
