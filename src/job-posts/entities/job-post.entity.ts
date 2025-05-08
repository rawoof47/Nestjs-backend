import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class JobPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  // Other fields and relationships
}
