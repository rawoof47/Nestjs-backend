export class StatusEntity {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
