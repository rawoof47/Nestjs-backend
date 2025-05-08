export class RewardPointEntity {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RewardPoint {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column('int', { default: 0 })
  totalPoints: number;

  @Column('int', { default: 0 })
  lifetimePoints: number;

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP' })
  lastUpdated: Date;
}
