import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  jobId: string;

  @Column()
  status: string;

  // Add other columns as per your requirements
}
