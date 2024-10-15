import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: string; // Can be 'admin' or 'user'
}
