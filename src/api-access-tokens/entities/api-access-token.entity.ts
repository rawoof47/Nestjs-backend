import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ApiAccessToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  token: string;

  @Column()
  clientId: string;
}
