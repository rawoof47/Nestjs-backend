export class JobShortlistEntity {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class JobShortlist {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  shortlistStatusId: string;
}
