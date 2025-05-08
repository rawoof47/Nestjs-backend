export class StatusCategoryEntity {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class StatusCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
