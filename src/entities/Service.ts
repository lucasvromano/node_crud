import { Scheduling } from "./Scheduling";
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
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

  @ManyToOne(() => Scheduling, (scheduling) => scheduling.services)
  scheduling: Scheduling;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
