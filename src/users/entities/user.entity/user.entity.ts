import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: Number;

  @Column()
  phone: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }

    this.id = uuidv4();
  }
}
