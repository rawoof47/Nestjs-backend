export class ReferralEntity {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Referral {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  referredUserId: string;
}
