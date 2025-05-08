import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserBadge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  badgeId: string;
}
