export class RecruiterTeamEntity {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RecruiterTeam {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
