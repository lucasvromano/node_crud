import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("working_hours")
export class WorkingHour {
  @PrimaryColumn()
  id: string;

  @Column()
  first_start_date: Date;

  @Column()
  first_end_date: Date;

  @Column()
  last_start_date: Date;

  @Column()
  last_end_date: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
