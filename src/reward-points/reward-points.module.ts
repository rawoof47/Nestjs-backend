import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RewardPointsService } from './reward-points.service';
import { RewardPointsController } from './reward-points.controller';
import { RewardPoint } from './entities/reward-point.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RewardPoint])],
  controllers: [RewardPointsController],
  providers: [RewardPointsService],
})
export class RewardPointsModule {}
