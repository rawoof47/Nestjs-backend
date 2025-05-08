import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Referral } from './entities/referral.entity';
import { CreateReferralDto } from './dto';

@Injectable()
export class ReferralsService {
  constructor(
    @InjectRepository(Referral)
    private readonly referralRepository: Repository<Referral>,
  ) {}

  create(dto: CreateReferralDto) {
    const referral = this.referralRepository.create(dto);
    return this.referralRepository.save(referral);
  }

  findAll() {
    return this.referralRepository.find();
  }

  findOne(id: string) {
    return this.referralRepository.findOne({ where: { id } });
  }
}
