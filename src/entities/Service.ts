import { Scheduling } from './Scheduling';
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("services")
export class Service {
  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  time: Date;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(type => Scheduling, scheduling => scheduling.services)
  scheduling: Scheduling;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
