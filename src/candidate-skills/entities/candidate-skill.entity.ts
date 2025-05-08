import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('candidate_skills')
export class CandidateSkill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  skillName: string;

  @Column()
  level: string;

  // Add other columns as per your requirements
}
