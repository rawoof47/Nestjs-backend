export class OracleModuleEntity {}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OracleModule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: true })
  statusId: string;
}
