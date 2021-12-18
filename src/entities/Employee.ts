import { User } from "./User";
import { WorkingHour } from "./WorkingHour";
import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("employees")
export class Employee {
  @PrimaryColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  photo: string;

  @Column()
  salary: number;

  @Column()
  working_hour_id: string;

  @ManyToOne(() => WorkingHour)
  @JoinColumn({ name: "working_hour_id" })
  working_hour: WorkingHour;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
