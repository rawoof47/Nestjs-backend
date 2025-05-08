import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { CreateSubscriptionDto } from './dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
  ) {}

  create(dto: CreateSubscriptionDto) {
    const subscription = this.subscriptionRepository.create(dto as Partial<Subscription>);
    return this.subscriptionRepository.save(subscription);
  }

  findAll() {
    return this.subscriptionRepository.find();
  }

  findOne(id: string) {
    return this.subscriptionRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.subscriptionRepository.delete(id);
  }
}
